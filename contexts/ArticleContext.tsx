
import React, { createContext, useContext, useState, ReactNode, useMemo, useCallback } from 'react';
import { Article } from '../types';
import { SAMPLE_ARTICLES } from '../constants';

interface ArticleContextType {
  articles: Article[];
  getArticleById: (id: string) => Article | undefined;
  getArticlesByCategory: (category: string) => Article[];
}

const ArticleContext = createContext<ArticleContextType | undefined>(undefined);

export const ArticleProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [articles] = useState<Article[]>(SAMPLE_ARTICLES);

  const getArticleById = useCallback((id: string): Article | undefined => {
    return articles.find(article => article.id === id);
  }, [articles]);

  const getArticlesByCategory = useCallback((category: string): Article[] => {
    return articles.filter(article => article.category.toLowerCase() === category.toLowerCase());
  }, [articles]);
  
  const memoizedArticles = useMemo(() => articles, [articles]);

  const contextValue = useMemo(() => ({
    articles: memoizedArticles, 
    getArticleById, 
    getArticlesByCategory
  }), [memoizedArticles, getArticleById, getArticlesByCategory]);

  return (
    <ArticleContext.Provider value={contextValue}>
      {children}
    </ArticleContext.Provider>
  );
};

export const useArticles = (): ArticleContextType => {
  const context = useContext(ArticleContext);
  if (context === undefined) {
    throw new Error('useArticles must be used within an ArticleProvider');
  }
  return context;
};
