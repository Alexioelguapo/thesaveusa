
import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES, NAV_LINKS, SitePages } from '../constants';
import { useArticles } from '../contexts/ArticleContext';
import GeminiCommentaryHelper from './GeminiCommentaryHelper';
import { SparklesIcon } from './icons/FluentIcons';

const Sidebar: React.FC = () => {
  const { articles } = useArticles();
  const recentPosts = articles.slice(0, 5); // Get latest 5 articles

  return (
    <aside className="w-full md:w-1/3 lg:w-1/4 p-4 space-y-8">
      {/* Categories Section */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md border border-blue-800">
        <h3 className="text-xl font-bold font-display text-blue-900 mb-3 border-b-2 border-red-600 pb-2">Categories</h3>
        <ul className="space-y-2">
          {NAV_LINKS.filter(link => link.isCategory).map(categoryLink => (
            <li key={categoryLink.name}>
              <Link 
                to={categoryLink.path} 
                className="text-red-700 hover:text-blue-900 hover:underline transition-colors font-semibold"
              >
                {categoryLink.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts Section */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md border border-blue-800">
        <h3 className="text-xl font-bold font-display text-blue-900 mb-3 border-b-2 border-red-600 pb-2">Recent Posts</h3>
        <ul className="space-y-2">
          {recentPosts.map(post => (
            <li key={post.id}>
              <Link 
                to={`${SitePages.Article}/${post.id}`}
                className="text-gray-700 hover:text-red-700 hover:underline transition-colors text-sm"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Megan AI Commentary Helper */}
      <div className="bg-gray-50 p-4 rounded-lg shadow-md border border-blue-800">
         <h3 className="text-xl font-bold font-display text-blue-900 mb-3 border-b-2 border-red-600 pb-2">Ask Megan</h3>
        <GeminiCommentaryHelper />
      </div>

      {/* Sidebar Call to Action */}
      <div className="bg-gradient-to-br from-red-700 to-blue-900 text-white p-4 rounded-lg shadow-md border border-red-800 text-center">
        <SparklesIcon className="h-8 w-8 mx-auto mb-2 text-yellow-300" />
        <h3 className="text-lg font-bold font-display mb-2">Take Action!</h3>
        <p className="text-sm mb-3">Don't just get mad, get prepared. Find solutions to protect your family & freedom.</p>
        <Link 
            to={SitePages.RecommendedResources}
            className="inline-block bg-white text-red-700 font-bold py-2 px-4 rounded hover:bg-gray-200 transition-colors duration-300 w-full"
        >
            See Patriot Resources
        </Link>
      </div>

      {/* Mock Ad Placeholder */}
      <div className="bg-gray-200 p-4 rounded-lg shadow-md text-center border border-blue-800">
        <img src="https://picsum.photos/seed/adbanner/300/250" alt="Advertisement" className="mx-auto mb-2 rounded" />
        <p className="text-sm text-gray-600 font-semibold">ADVERTISEMENT</p>
        <p className="text-xs text-gray-500">Support True American Businesses!</p>
      </div>
    </aside>
  );
};

export default Sidebar;