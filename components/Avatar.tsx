import React, { useState, useEffect } from 'react';
import { getAvatarUrl } from '../services/avatarService';
import { UserCircleIcon } from './icons/FluentIcons'; // Fallback icon

interface AvatarProps {
  seed: string;
  name: string;
  className?: string;
}

const Avatar: React.FC<AvatarProps> = ({ seed, name, className = 'h-12 w-12' }) => {
  const [imageUrl, setImageUrl] = useState<string>('');
  const [hasError, setHasError] = useState<boolean>(false);

  useEffect(() => {
    // Fetch the consistent URL from our service
    setImageUrl(getAvatarUrl(seed));
    setHasError(false); // Reset error state on seed change
  }, [seed]);

  const handleError = () => {
    setHasError(true);
  };
  
  const baseClasses = "rounded-full object-cover border-2 border-white shadow-md";

  if (hasError || !imageUrl) {
    return (
        <div className={`${baseClasses} ${className} bg-gray-300 flex items-center justify-center`}>
            <UserCircleIcon className="text-gray-500 h-full w-full" />
        </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={`${name}'s avatar`}
      className={`${baseClasses} ${className}`}
      onError={handleError}
      title={name}
    />
  );
};

export default Avatar;
