import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../HeroSection';
import ArticleCard from '../ArticleCard';
import Sidebar from '../Sidebar';
import { useArticles } from '../../contexts/ArticleContext';
import { AUTHORS, SAMPLE_COMMUNITY_POSTS, SitePages } from '../../constants';
import Avatar from '../Avatar';
import { UsersIcon } from '../icons/FluentIcons';
import CallToAction from '../CallToAction';

// Component to showcase the "faces" of the network
const FacesOfOurNetwork: React.FC = () => {
  // Combine authors and community posters for a diverse gallery of faces
  const networkMembers = [
    ...Object.values(AUTHORS).map(author => ({ name: author.name, seed: author.avatarSeed })),
    ...SAMPLE_COMMUNITY_POSTS.map(post => ({ name: post.author, seed: post.avatarSeed }))
  ];

  // Simple shuffle and slice to get a random-looking selection
  const featuredMembers = networkMembers
    .sort(() => 0.5 - Math.random())
    .slice(0, 8); // Show up to 8 faces

  return (
    <section className="my-12 p-6 bg-gradient-to-b from-blue-50 to-red-50 rounded-lg shadow-inner border-t-2 border-b-2 border-red-200">
      <h2 className="text-3xl font-bold font-display text-blue-900 mb-6 text-center flex items-center justify-center">
        <UsersIcon className="h-8 w-8 mr-3 text-red-700"/>
        Faces of the Patriot Network
      </h2>
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
        {featuredMembers.map(member => (
          <div key={member.seed} className="flex flex-col items-center text-center w-24">
            <Avatar seed={member.seed} name={member.name} className="h-16 w-16 mb-2" />
            <span className="text-xs font-semibold text-gray-700">{member.name}</span>
          </div>
        ))}
      </div>
       <div className="text-center mt-6">
            <Link 
                to={SitePages.CommunityVoices} 
                className="inline-flex items-center bg-red-700 hover:bg-red-800 text-white font-semibold py-2 px-5 rounded-md shadow-md transition-colors transform hover:scale-105"
            >
                Join the Conversation!
            </Link>
        </div>
    </section>
  );
};


const HomePage: React.FC = () => {
  const { articles } = useArticles();
  const featuredArticles = articles.slice(0, 2); // First 2 articles as featured
  const recentArticles = articles.slice(2, 5); // Next 3 articles as recent under main section

  return (
    <div>
      <HeroSection />
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-2/3 lg:w-3/4">
          <section className="mb-12">
            <h2 className="text-3xl font-bold font-display text-blue-900 mb-6 border-b-4 border-red-600 pb-2">
              Featured Analysis
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {featuredArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>

          <FacesOfOurNetwork />

          <section>
            <h2 className="text-3xl font-bold font-display text-blue-900 mb-6 border-b-4 border-red-600 pb-2">
              Latest Updates
            </h2>
            <div className="space-y-8">
              {recentArticles.map(article => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </section>
          
          <CallToAction />

        </div>
        <Sidebar />
      </div>
    </div>
  );
};

export default HomePage;