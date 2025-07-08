import React from 'react';
import { Link } from 'react-router-dom';
import { Article } from '../types';
import { SitePages } from '../constants';
import Avatar from './Avatar'; // New import

interface ArticleCardProps {
  article: Article;
}

const ArticleCard: React.FC<ArticleCardProps> = ({ article }) => {
  return (
    <div className="bg-white rounded-lg shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300 ease-in-out border border-red-700 flex flex-col">
      <Link to={`${SitePages.Article}/${article.id}`}>
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-48 object-cover"
          onError={(e) => (e.currentTarget.src = 'https://picsum.photos/seed/error/600/400')}
        />
      </Link>
      <div className="p-6 flex-grow flex flex-col">
        <span className="inline-block bg-red-700 text-white text-xs font-semibold px-2 py-1 uppercase rounded-full mb-3 self-start">
          {article.category}
        </span>
        <h3 className="text-xl font-bold font-display text-blue-900 mb-2 hover:text-red-700 transition-colors">
          <Link to={`${SitePages.Article}/${article.id}`}>{article.title}</Link>
        </h3>
        <div className="flex items-center text-gray-700 text-sm mb-3">
          <Avatar seed={article.author.avatarSeed} name={article.author.name} className="h-8 w-8 mr-2" />
          <span>By <span className="font-semibold">{article.author.name}</span> on {article.date}</span>
        </div>
        <p className="text-gray-600 text-base leading-relaxed mb-4 flex-grow">{article.summary}</p>
        <div className="mt-auto">
          <Link
            to={`${SitePages.Article}/${article.id}`}
            className="inline-block bg-blue-800 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded transition-colors duration-300 ease-in-out transform hover:scale-105"
          >
            Read More &raquo;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
