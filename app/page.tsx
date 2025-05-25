"use client";

import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

import Link from "next/link";
import Hero from "@/components/sections/heroSection";
import WhatIWorkWith from "@/components/sections/whatIWorkWithSection";
import Experience from "@/components/sections/experienceSection";
import Projects from "@/components/sections/projectsSection";
import Posts from "@/components/sections/postsSection";
import Contact from "@/components/sections/contactSection";
import { getLatestPost } from "@/resources/posts";

export default function HomePage() {
  const posts = getLatestPost();
  return (
    <main>
      {/* Hero */}
      <Hero />

      {/* What I work with */}
      <WhatIWorkWith />

      {/* Experience */}
      <Experience />

      {/* Projects */}
      <Projects />

      {/* Posts */}
      <Posts posts={posts} />

      {/* Contact */}
      <Contact />

      {/* Floating button */}
      <Button asChild variant={"outline"} className="fixed bottom-10 right-10">
        <Link href={"#hero"}>
          <ArrowUp />
        </Link>
      </Button>
    </main>
  );
}
