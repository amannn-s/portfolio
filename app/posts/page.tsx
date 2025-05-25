"use client";

import React from "react";
import { getAllPost } from "@/resources/posts";
import Posts from "@/components/sections/postsSection";

const AllPostsPage = () => {
  const posts = getAllPost();
  return (
    <main>
      {/* Posts */}
      <Posts posts={posts} />
    </main>
  );
};

export default AllPostsPage;
