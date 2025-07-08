
export interface Author {
  id: string;
  name: string;
  bio: string;
  avatarSeed: string; // A unique string to seed the avatar service
}

export interface Article {
  id: string;
  title: string;
  category: string;
  author: Author; // Changed from string to Author object
  date: string;
  summary: string;
  content: string; // HTML content for rich text
  imageUrl: string;
  keywords: string[];
  tone?: 'critical' | 'skeptical' | 'praising' | 'urgent';
}

export interface NavLink {
  name: string;
  path: string;
  isCategory?: boolean;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>; // Optional icon component
}

export interface GroundingChunkWeb {
  uri?: string;
  title?: string;
}

export interface GroundingChunk {
  web?: GroundingChunkWeb;
}
export interface GeminiApiResponse {
  text: string;
  groundingChunks?: GroundingChunk[];
}

export interface CommunityPost {
  id: string;
  author: string; // Username or Display Name
  avatarSeed: string; // Changed from avatarUrl to avatarSeed
  timestamp: string; // e.g., "October 28, 2023"
  title: string;
  contentSnippet: string; // A short preview of the post
  fullContent?: string; // Optional full content if we were to have detail pages
  likes: number;
  commentsCount: number;
  tags?: string[];
}

export interface AffiliateCategory {
  problem: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  solutions: {
    title: string;
    partners: string[];
  }[];
}

export interface BornInAmericaProduct {
  name: string;
  description: string;
  link: string;
}

export interface VideoSource {
  id: string;
  title: string;
  source: string;
  thumbnailUrl: string;
  embedUrl: string;
}


// Ensure process.env.API_KEY is handled outside of the codebase.
// This type is for internal reference of what is expected.
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      API_KEY?: string;
    }
  }
}