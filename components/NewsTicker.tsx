import React from 'react';
import { Link } from 'react-router-dom';
import { NEWS_TICKER_ITEMS } from '../constants';

const NewsTicker: React.FC = () => {
  // Duplicate items to create a seamless looping effect for the animation
  const tickerItems = [...NEWS_TICKER_ITEMS, ...NEWS_TICKER_ITEMS];

  return (
    <div className="bg-red-700 text-white py-2 overflow-hidden flex items-center border-t-2 border-b-2 border-red-900">
      <div className="bg-blue-900 text-white text-xs font-bold uppercase px-3 py-1 mr-4 flex-shrink-0 shadow-lg">
        Breaking
      </div>
      <div className="flex whitespace-nowrap animate-ticker-scroll group-hover:pause">
        {tickerItems.map((item, index) => (
          <div key={index} className="inline-block mx-6">
            <Link to={item.link} className="text-sm hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded">
              <span className="text-blue-300 font-bold mr-2">&bull;</span>
              {item.text}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsTicker;
