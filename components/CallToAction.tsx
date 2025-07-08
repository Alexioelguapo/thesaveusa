import React from 'react';
import { Link } from 'react-router-dom';
import { SitePages } from '../constants';
import { ShieldCheckIcon, SparklesIcon } from './icons/FluentIcons';

interface CallToActionProps {
  className?: string;
}

const CallToAction: React.FC<CallToActionProps> = ({ className = '' }) => {
  return (
    <section className={`bg-gradient-to-r from-blue-800 via-blue-900 to-black p-8 my-8 rounded-lg shadow-2xl border-2 border-red-600 text-center text-white ${className}`}>
      <div className="flex justify-center items-center mb-4">
          <SparklesIcon className="h-10 w-10 text-yellow-300 animate-pulse" />
      </div>
      <h2 className="text-3xl font-bold font-display tracking-wide mb-2">
        Tired of the Problems? Find Patriot Solutions.
      </h2>
      <p className="text-lg text-blue-200 mb-6 max-w-2xl mx-auto">
        Reading the news is only the first step. Equip yourself with the tools, knowledge, and resources to defend your family and secure your freedom.
      </p>
      <Link
        to={SitePages.RecommendedResources}
        className="inline-flex items-center bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg text-lg"
      >
        <ShieldCheckIcon className="h-6 w-6 mr-2" />
        Explore Patriot Resources
      </Link>
    </section>
  );
};

export default CallToAction;
