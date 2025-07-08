
import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { NavLink as NavLinkType } from '../types';
import { FlagIcon } from './icons/FlagIcon'; // Default icon

const Navigation: React.FC = () => {
  return (
    <nav className="mt-3 border-t border-white border-opacity-30 pt-3">
      <ul className="flex flex-wrap justify-center sm:justify-start -mb-px"> {/* Use -mb-px for border alignment trick */}
        {NAV_LINKS.map((link: NavLinkType) => {
          const IconComponent = link.icon || FlagIcon; // Use specific icon or default
          return (
            <li key={link.name} className="mr-1">
              <RouterNavLink
                to={link.path}
                className={({ isActive }) =>
                  `inline-flex items-center px-3 py-2 text-xs sm:text-sm font-medium uppercase tracking-wide transition-all duration-150 ease-in-out border-b-2
                  ${isActive 
                    ? 'border-white text-white bg-white bg-opacity-10' 
                    : 'border-transparent text-gray-200 hover:text-white hover:border-gray-300'
                  }`
                }
              >
                <IconComponent className="h-4 w-4 mr-1.5 opacity-80" />
                {link.name}
              </RouterNavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;