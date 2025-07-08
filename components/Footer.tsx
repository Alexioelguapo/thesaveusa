
import React from 'react';
import { SITE_TITLE, NETWORK_TAGLINE } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-blue-900 text-gray-300 py-8 text-center shadow-inner-top">
      <div className="container mx-auto px-4">
        <p className="text-sm font-semibold">
          {SITE_TITLE} - {NETWORK_TAGLINE}
        </p>
        <p className="text-sm">
          &copy; {currentYear}. All Rights Reserved.
        </p>
        <p className="text-xs mt-2 italic">
          Content on this site reflects "America First" news, commentary, and community voices. Reader discretion and critical thinking are advised.
        </p>
        <p className="text-xs mt-1">
          Powered by Patriot Principles & Community Engagement.
        </p>
      </div>
    </footer>
  );
};

export default Footer;