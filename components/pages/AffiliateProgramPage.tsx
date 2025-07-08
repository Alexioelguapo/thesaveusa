
import React from 'react';
import { Link } from 'react-router-dom';
import { AFFILIATE_CATEGORIES, SitePages } from '../../constants';
import { HeartIcon, ShieldCheckIcon, UsersIcon } from '../icons/FluentIcons';

const AffiliateProgramPage: React.FC = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl prose prose-lg max-w-5xl mx-auto border-2 border-red-800">
      <header className="text-center mb-10">
        <HeartIcon className="h-20 w-20 mx-auto text-blue-800 mb-4" />
        <h1 className="text-4xl font-display text-blue-900">Support Our Mission</h1>
        <p className="text-lg text-gray-700">Join forces with TheSaveUSA.com to champion American values.</p>
      </header>

      {/* Section for Readers */}
      <section className="mb-12 bg-gradient-to-br from-blue-50 to-red-50 p-8 rounded-lg shadow-inner border">
        <h2 className="text-3xl font-display text-red-700 mt-0 mb-4 flex items-center">
          <ShieldCheckIcon className="h-8 w-8 mr-3" />
          For Our Readers: Fueling the Fight for Truth
        </h2>
        <p>
          Every article, investigation, and commentary on this platform is a battle for the heart and soul of America. To keep this platform independent and free from the influence of the globalist agenda, we rely on the support of patriots like you.
        </p>
        <p className="font-semibold text-blue-900 mt-4">
          When you purchase products through the links on our site, we may earn a small commission at <strong className="uppercase">no extra cost to you</strong>. This directly funds our mission.
        </p>
        <p className="mt-3">
          We are fiercely selective. We only recommend products and services that align with our core values of self-reliance, patriotism, and American strength. Your trust is our most valuable asset, and we are committed to honoring it.
        </p>
        <div className="text-center mt-6">
          <Link
            to={SitePages.RecommendedResources}
            className="inline-block bg-blue-800 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg"
          >
            Browse Recommended Patriot Products
          </Link>
        </div>
      </section>

      {/* Section for Partners */}
      <section>
        <h2 className="text-3xl font-display text-blue-900 mb-4 flex items-center">
          <UsersIcon className="h-8 w-8 mr-3" />
          For Potential Partners: Join the Patriot Network
        </h2>
        <p>
          Do you own an American business that shares our values? Are you creating products for patriots who are tired of the 'woke' corporate world?
        </p>
        <p className="mt-3">
          TheSaveUSA.com reaches a dedicated audience of conservative, pro-America individuals who are actively looking to support businesses that reflect their principles. They are loyal, engaged, and eager to align their purchasing power with their beliefs.
        </p>

        <h3 className="text-2xl font-display text-red-700 mt-6">We are looking for partners in areas such as:</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 my-4 not-prose">
          {AFFILIATE_CATEGORIES.map((category) => (
            <div key={category.problem} className="flex items-center space-x-3">
              <category.icon className="h-6 w-6 text-red-700 flex-shrink-0" />
              <span className="font-semibold text-gray-800">{category.problem}</span>
            </div>
          ))}
        </div>
        
        <p className="mt-4">
          If you offer high-quality, patriot-aligned products and want to reach a highly engaged audience, we want to hear from you. We are building a parallel economy that celebrates American greatness, and we want you to be a part of it.
        </p>

        <div className="text-center mt-8">
            <a
                href="mailto:partnerships@thesaveusa.com?subject=Partnership Inquiry from TheSaveUSA.com"
                className="inline-block bg-red-700 hover:bg-blue-800 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg"
            >
                Contact Us About a Partnership
            </a>
        </div>
      </section>

      <blockquote className="border-l-4 border-blue-800 pl-4 py-2 my-10 italic text-blue-900 bg-gray-50">
        <p className="mb-0">"By working together, we can build an economic fortress that is immune to cancel culture and dedicated to the principles that made this nation the greatest on Earth."</p>
      </blockquote>
    </div>
  );
};

export default AffiliateProgramPage;
