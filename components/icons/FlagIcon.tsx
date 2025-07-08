
import React from 'react';

interface IconProps {
  className?: string;
}

export const FlagIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 60 30" 
    className={className}
    fill="currentColor" // Use current text color for parts of the flag
  >
    <defs>
      <clipPath id="s">
        <path d="M0,0 v30 h60 v-30 z"/>
      </clipPath>
      <clipPath id="t">
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z"/>
      </clipPath>
      <g id="f">
        <g id="c">
          <path id="z" d="M0,0 v1 h0.5 z" transform="matrix(0.8090169943749475,0.5877852522924731,-0.5877852522924731,0.8090169943749475,0,0)"/>
          <use xlinkHref="#z" transform="scale(-1,1)"/>
          <use xlinkHref="#z" transform="matrix(0.30901699437494745,0.9510565162951535,-0.9510565162951535,0.30901699437494745,0,0)"/>
          <use xlinkHref="#z" transform="matrix(0.30901699437494745,-0.9510565162951535,0.9510565162951535,0.30901699437494745,0,0)"/>
          <use xlinkHref="#z" transform="scale(-1,1) matrix(0.30901699437494745,0.9510565162951535,-0.9510565162951535,0.30901699437494745,0,0)"/>
        </g>
        <use xlinkHref="#c" transform="translate(2,0)"/>
        <use xlinkHref="#c" transform="translate(4,0)"/>
        <use xlinkHref="#c" transform="translate(0,2.5)"/>
        <use xlinkHref="#c" transform="translate(2,2.5)"/>
        <use xlinkHref="#c" transform="translate(4,2.5)"/>
      </g>
    </defs>
    {/* Stripes */}
    <rect width="60" height="30" fill="#BF0A30"/> {/* Red */}
    <g stroke="#FFFFFF" strokeWidth="2.3"> {/* White stripes */}
      <path d="M0,3.45 h60 M0,8.05 h60 M0,12.65 h60 M0,17.25 h60 M0,21.85 h60 M0,26.45 h60"/>
    </g>
    {/* Blue canton */}
    <rect width="24" height="13.8" fill="#002868"/> {/* Blue */}
    {/* Stars - simplified for visibility at small sizes, actual star arrangement is complex */}
    <g fill="#FFFFFF" transform="translate(1,0.5) scale(0.9)">
        <use xlinkHref="#f"/>
        <use xlinkHref="#f" transform="translate(6,0)"/>
        <use xlinkHref="#f" transform="translate(0,5)"/>
        <use xlinkHref="#f" transform="translate(6,5)"/>
        {/* Add more for a better representation if needed, but this is a simplified icon */}
    </g>
  </svg>
);
