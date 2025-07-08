
import React from 'react';
import ArticleCard from '../ArticleCard';
import Sidebar from '../Sidebar';
import { useArticles } from '../../contexts/ArticleContext';
import { Article } from '../../types';

interface ArticleListPageProps {
  category: string;
}

const ArticleListPage: React.FC<ArticleListPageProps> = ({ category }) => {
  const { getArticlesByCategory } = useArticles();
  const articlesInCategory = getArticlesByCategory(category);

  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-2/3 lg:w-3/4">
        <h2 className="text-3xl font-bold font-display text-blue-900 mb-6 border-b-4 border-red-600 pb-2">
          {category}
        </h2>
        {articlesInCategory.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {articlesInCategory.map((article: Article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        ) : (
          <p className="text-gray-700 text-lg">No articles found in this category yet. Check back soon for fearless commentary!</p>
        )}
      </div>
      <Sidebar />
    </div>
  );
};

export default ArticleListPage;
