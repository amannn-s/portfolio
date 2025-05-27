import type { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Blog | Amandeep Singh – Full Stack Developer & Tech Blogger",
  description:
    "Read case studies, web development tips, AI integration guides, and project breakdowns from Amandeep Singh.",
  openGraph: {
    title: "Blog | Amandeep Singh",
    description:
      "Insights, tutorials, and case studies on Full Stack and AI-powered development.",
    url: "https://aman-dev-2002.vercel.app",
    siteName: "Amandeep Singh Portfolio & Blog",
    images: [
      {
        url: "https://aman-dev-2002.vercel.app/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Amandeep Singh – Full Stack Dev Blog",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Amandeep Singh",
    description:
      "Explore full stack and AI blog posts, case studies, and career advice.",
    images: ["https://aman-dev-2002.vercel.app/og-cover.png"],
  },
};

export default function BlogLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
