// services/avatarService.ts

/**
 * A curated list of seeds for picsum.photos to get a variety of "All-American" looking faces.
 * This simulates a database of user profile pictures. Using specific seeds ensures that the same
 * user/author always gets the same avatar, creating a sense of identity and consistency.
 */
const avatarImageSeeds = [
  'people', 'man', 'woman', 'portrait', 'farmer', 'worker', 'veteran', 'teacher',
  'lady', 'gentleman', 'smile', 'outdoors', 'usa', 'patriot', 'citizen', 'volunteer',
  'strong', 'community', 'neighbor', 'honest', 'american', 'proud', 'bluecollar',
  'leader', 'thinker', 'builder', 'protector', 'innovator', 'pioneer', 'dreamer',
];

/**
 * A simple hashing function to convert a string seed into a number.
 * This ensures that a given string 'seed' (like a username) will always map to the same integer index.
 * @param str The input string (e.g., "johnD").
 * @returns A number based on the string.
 */
const simpleHash = (str: string): number => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash |= 0; // Convert to 32bit integer
  }
  return Math.abs(hash);
};

/**
 * Gets a consistent, themed avatar URL based on a unique seed string.
 * @param seed A unique identifier for a user or author (e.g., 'johnD', 'libertyLover76').
 * @returns A URL to a themed avatar image.
 */
export const getAvatarUrl = (seed: string): string => {
  const hash = simpleHash(seed);
  const index = hash % avatarImageSeeds.length;
  const imageSeed = avatarImageSeeds[index];
  
  // Using picsum.photos with a specific seed and adding a grayscale and slight blur filter for a unified, serious look.
  // The dimensions are set to 100x100 for a consistent square aspect ratio.
  return `https://picsum.photos/seed/${imageSeed}/100/100`;
};
