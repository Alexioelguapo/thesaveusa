
import React from 'react';
import { SAMPLE_COMMUNITY_POSTS, NETWORK_TAGLINE } from '../../constants';
import CommunityPostCard from '../CommunityPostCard';
import Sidebar from '../Sidebar';
import { UserPlusIcon, PencilSquareIcon } from '../icons/FluentIcons'; // Placeholder

const CommunityVoicesPage: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div className="w-full md:w-2/3 lg:w-3/4">
        <header className="mb-8 p-6 bg-gradient-to-r from-red-700 to-red-800 text-white rounded-lg shadow-xl">
          <h1 className="text-4xl font-display mb-2">Community Voices</h1>
          <p className="text-lg opacity-90">{NETWORK_TAGLINE}: Share Your Thoughts, Connect with Patriots.</p>
          <button
            type="button"
            className="mt-4 inline-flex items-center bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-md shadow-md transition-colors transform hover:scale-105"
            title="Submit Your Post (Coming Soon!)"
            aria-label="Submit Your Post (Coming Soon!)"
          >
            <PencilSquareIcon className="h-5 w-5 mr-2" />
            Share Your Voice! (Coming Soon)
          </button>
        </header>

        {SAMPLE_COMMUNITY_POSTS.length > 0 ? (
          <div className="space-y-6">
            {SAMPLE_COMMUNITY_POSTS.map(post => (
              <CommunityPostCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-gray-50 rounded-lg shadow">
            <UserPlusIcon className="h-16 w-16 mx-auto text-gray-400 mb-4" />
            <h2 className="text-2xl font-semibold text-gray-700 mb-2">No Community Posts Yet!</h2>
            <p className="text-gray-500">Be the first to share your voice in the Patriot Network!</p>
          </div>
        )}
      </div>
      <Sidebar />
    </div>
  );
};

export default CommunityVoicesPage;