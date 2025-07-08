import React from 'react';
import { CommunityPost } from '../types';
import { HandThumbUpIcon, ChatBubbleLeftEllipsisIcon, TagIcon } from './icons/FluentIcons';
import Avatar from './Avatar'; // Correctly import the new Avatar component

interface CommunityPostCardProps {
  post: CommunityPost;
}

const CommunityPostCard: React.FC<CommunityPostCardProps> = ({ post }) => {
  return (
    <article className="bg-gradient-to-br from-gray-50 to-gray-100 p-5 rounded-lg shadow-lg border border-blue-700 hover:shadow-xl transition-shadow duration-300">
      <header className="flex items-start space-x-3 mb-3">
        <Avatar 
          seed={post.avatarSeed} 
          name={post.author} 
          className="h-12 w-12 flex-shrink-0 border-red-600"
        />
        <div>
          <h3 className="text-lg font-semibold text-blue-900 font-display">{post.title}</h3>
          <p className="text-xs text-red-700">
            By <span className="font-bold">{post.author}</span> &bull; {post.timestamp}
          </p>
        </div>
      </header>
      
      <div className="text-gray-700 text-sm leading-relaxed mb-4 prose prose-sm max-w-none">
        <p>{post.contentSnippet}</p>
      </div>

      <footer className="flex flex-wrap items-center justify-between text-xs text-gray-600 pt-3 border-t border-blue-200">
        <div className="flex items-center space-x-4">
          <span className="flex items-center" title={`${post.likes} likes`}>
            <HandThumbUpIcon className="h-4 w-4 mr-1 text-blue-600" /> {post.likes}
          </span>
          <span className="flex items-center" title={`${post.commentsCount} comments`}>
            <ChatBubbleLeftEllipsisIcon className="h-4 w-4 mr-1 text-red-600" /> {post.commentsCount}
          </span>
        </div>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-2 sm:mt-0">
            <TagIcon className="h-4 w-4 mr-1 text-gray-500" />
            {post.tags.slice(0, 3).map(tag => (
              <span key={tag} className="bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded-full text-xs">
                #{tag}
              </span>
            ))}
          </div>
        )}
      </footer>
       <div className="mt-3 text-right">
            <button 
                type="button" 
                className="text-xs bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded-md shadow transition-colors"
                title="View Post & Comments (Coming Soon!)"
                aria-label="View Post & Comments (Coming Soon!)"
            >
                View Post / Comment
            </button>
        </div>
    </article>
  );
};

export default CommunityPostCard;
