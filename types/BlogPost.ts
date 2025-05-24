import { ReactNode } from "react";

interface Author {
  name: string;
  role?: string;
  bio: string;
  avatar?: string;
  social?: string;
}

interface SEO {
  title: string;
  description: string;
  keywords: string[];
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  date: string;
  author: Author;
  expert: string;
  description: string;
  tags: string[];
  estimatedReadTime: string;
  coverImage?: string; // optional
  featured: boolean;
  seo: SEO;
  content: () => ReactNode;
  codeBlocks?: string[];
}
