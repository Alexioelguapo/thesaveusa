import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
import { SITE_TITLE, SitePages, NETWORK_TAGLINE } from '../constants';
import { FlagIcon } from './icons/FlagIcon';
import { UserPlusIcon, ArrowRightStartOnRectangleIcon } from './icons/FluentIcons'; // Placeholder
import NewsTicker from './NewsTicker';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-blue-800 via-red-600 to-blue-800 text-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <Link to={SitePages.Home} className="flex items-center space-x-2 hover:opacity-80 transition-opacity mb-2 sm:mb-0">
            <FlagIcon className="h-10 w-10 text-white" />
            <div>
              <h1 className="text-3xl sm:text-4xl font-display tracking-wider">{SITE_TITLE}</h1>
              <p className="text-xs sm:text-sm font-semibold tracking-wide">{NETWORK_TAGLINE}</p>
            </div>
          </Link>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-3">
            <div className="flex space-x-2">
              <button 
                type="button" 
                className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold py-1.5 px-3 rounded-md shadow-md transition-colors flex items-center"
                title="Join The Network (Coming Soon!)"
                aria-label="Join The Network (Coming Soon!)"
              >
                <UserPlusIcon className="h-4 w-4 mr-1" />
                Join Network
              </button>
              <button 
                type="button" 
                className="bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold py-1.5 px-3 rounded-md shadow-md transition-colors flex items-center"
                title="Member Login (Coming Soon!)"
                aria-label="Member Login (Coming Soon!)"
              >
                 <ArrowRightStartOnRectangleIcon className="h-4 w-4 mr-1" />
                Login
              </button>
            </div>
          </div>
        </div>
        <Navigation />
      </div>
      <NewsTicker />
    </header>
  );
};

export default Header;