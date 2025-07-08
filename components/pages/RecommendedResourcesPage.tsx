
import React from 'react';
import { AFFILIATE_CATEGORIES, BORN_IN_AMERICA_PRODUCTS } from '../../constants';
import { InformationCircleIcon, NewspaperIcon, SparklesIcon } from '../icons/FluentIcons';

const RecommendedResourcesPage: React.FC = () => {
  return (
    <div className="bg-white p-6 md:p-10 rounded-lg shadow-xl prose prose-lg max-w-5xl mx-auto border-2 border-blue-800">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-display text-blue-900">Patriot Resources & Recommended Gear</h1>
        <p className="text-lg text-gray-700">Solutions and tools for the self-reliant American.</p>
      </header>

      <div className="bg-blue-50 border border-blue-200 text-blue-800 p-4 rounded-lg mb-10 text-sm flex items-start">
        <InformationCircleIcon className="h-6 w-6 mr-3 flex-shrink-0" />
        <div>
          <h3 className="font-semibold">Affiliate Disclosure</h3>
          <p className="mt-1">
            To support our mission of providing fearless, independent commentary, TheSaveUSA.com may earn a commission from qualifying purchases made through links on this page. Our recommendations are based on our team's research and alignment with patriot values. Your support helps keep this platform strong.
          </p>
        </div>
      </div>

      {/* Featured 'Born in America' Section */}
      <section id="born-in-america-marketplace" className="mb-12 scroll-mt-20">
         <h2 className="text-3xl font-display text-red-700 mt-8 mb-6 border-b-2 border-red-600 pb-2 flex items-center">
            <SparklesIcon className="h-7 w-7 mr-3" />
            Featured 'Born in America' Resources
          </h2>
          <div className="space-y-6 not-prose">
            {BORN_IN_AMERICA_PRODUCTS.map((product) => (
              <div key={product.name} className="bg-gradient-to-tr from-white to-gray-50 p-6 rounded-lg shadow-lg border border-red-600 flex flex-col sm:flex-row items-center gap-6">
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold font-display text-blue-900">{product.name}</h3>
                  <p className="text-gray-700 mt-2">{product.description}</p>
                </div>
                <div className="flex-shrink-0">
                  <a
                    href={product.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-800 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-110 shadow-lg"
                  >
                    Learn more & support TheSaveUSA creators
                  </a>
                </div>
              </div>
            ))}
          </div>
      </section>

      <section>
        <h2 className="text-3xl font-display text-blue-800 mt-8 mb-6 border-b-2 border-blue-600 pb-2">Recommended Solutions by Category</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 not-prose">
          {AFFILIATE_CATEGORIES.map((category) => (
            <div key={category.problem} className="bg-gray-50 rounded-lg shadow-md border border-gray-200 p-6 flex flex-col">
              <div className="flex items-center mb-4">
                <category.icon className="h-10 w-10 text-red-700 mr-4" />
                <h3 className="text-xl font-bold font-display text-blue-900">{category.problem}</h3>
              </div>
              <div className="space-y-4 flex-grow">
                {category.solutions.map((solution) => (
                  <div key={solution.title}>
                    <h4 className="font-semibold text-gray-800">{solution.title}</h4>
                    <p className="text-sm text-gray-600 italic">
                      Potential Partners: {solution.partners.join(', ')}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 bg-gradient-to-br from-red-50 to-blue-50 p-8 rounded-lg shadow-inner border border-gray-200">
          <h2 className="text-3xl font-display text-blue-900 mb-6 flex items-center">
            <NewspaperIcon className="h-8 w-8 mr-3 text-red-700" />
            Our Content Strategy: Solutions-Focused Journalism
          </h2>
          <p className="mb-4">
            We believe that highlighting problems is only half the battle. True patriotism involves finding and promoting solutions. Our content is built on key pillars designed to empower our readers to be prepared, financially secure, and strong in their values.
          </p>
          <div className="space-y-3 pl-4 border-l-4 border-red-700">
            <div>
              <h4 className="font-bold text-red-800">The Patriot's Preparedness Corner</h4>
              <p>Articles, reviews, and guides on emergency food, water, and survival skills. Example: "Inflation-Proof Your Pantry: Top 5 Long-Lasting Food Kits."</p>
            </div>
            <div>
              <h4 className="font-bold text-red-800">Sound Money & Financial Fortress</h4>
              <p>Content on protecting assets and navigating economic uncertainty. Example: "Why Gold is Every Patriot's Best Friend in 2024."</p>
            </div>
             <div>
              <h4 className="font-bold text-red-800">American Health & Wellness</h4>
              <p>Focus on natural health and reducing reliance on mainstream systems. Example: "Boost Your Family's Immunity: The Supplements Mainstream Media Won't Tell You About."</p>
            </div>
             <div>
              <h4 className="font-bold text-red-800">Born in America Marketplace</h4>
              <p>Highlighting and reviewing products and courses made by and for Americans. Example: "Support American Workers & Creators: 10 USA-Made Products Every Patriot Should Own."</p>
            </div>
          </div>
           <p className="mt-6 italic">
            When our news commentary discusses challenges like inflation or security, we will seamlessly weave in links to these practical guides and resources, ensuring our platform is not just informative, but genuinely useful to our community.
          </p>
      </section>
    </div>
  );
};

export default RecommendedResourcesPage;