import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Amandeep Singh | Full Stack Developer & Tech Blogger",
    template: "%s | Amandeep Singh",
  },
  description:
    "Amandeep Singh is a Full Stack Developer specializing in MERN, React Native, and AI-powered web apps. Explore my portfolio, blog articles, and case studies.",
  keywords: [
    "Aman",
    "Aman developer",
    "Aman mern stack",
    "Aman java",
    "Aman AI",
    "Amandeep Singh",
    "Full Stack Developer",
    "React Developer",
    "MERN Stack",
    "Next.js Blog",
    "JavaScript",
    "AI Developer Portfolio",
    "Web Development",
    "Tech Case Studies",
    "Programming Blog",
  ],
  metadataBase: new URL("https://aman-dev-2002.vercel.app"),
  openGraph: {
    title: "Amandeep Singh | Full Stack Developer & Tech Blogger",
    description:
      "Explore my developer portfolio and blog, covering web dev, AI, and practical coding case studies.",
    url: "https://aman-dev-2002.vercel.app",
    siteName: "Amandeep Singh",
    images: [
      {
        url: "https://aman-dev-2002.vercel.app/og-cover.png",
        width: 1200,
        height: 630,
        alt: "Amandeep Singh Portfolio Banner",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amandeep Singh | Full Stack Developer & Blogger",
    description:
      "Check out my web development projects, coding articles, and tech guides.",
    images: ["https://aman-dev-2002.vercel.app/og-cover.png"],
    creator: "@Aman_62s",
  },
  authors: [
    {
      name: "Amandeep Singh",
      url: "https://www.linkedin.com/in/amandeep-singh-it-developer",
    },
  ],
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Header />
          {children}
          <Footer />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
