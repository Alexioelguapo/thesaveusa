import React from 'react';
import { TAGLINE, NETWORK_TAGLINE } from '../constants';

const HeroSection: React.FC = () => {
  return (
    <div 
      className="relative bg-cover bg-center py-24 px-4 text-center text-white shadow-lg mb-8 rounded-lg overflow-hidden border-4 border-white"
      style={{ backgroundImage: "url('https://picsum.photos/seed/communitygathering/1200/450')" }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-display uppercase tracking-wider mb-3 leading-tight">
          {TAGLINE}
        </h2>
        <p className="text-xl md:text-2xl font-semibold mb-6 text-red-300">
          {NETWORK_TAGLINE}
        </p>
        <p className="text-md md:text-lg font-light max-w-2xl mx-auto">
          Your Trusted Source for Unfiltered News, Conservative Values, and a Platform for Patriot Voices.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
