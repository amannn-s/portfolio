"use client";

import React from "react";
import { motion } from "motion/react";
import { getAllPost } from "@/resources/posts";
import PostCard from "@/components/shared/postCard";

const AllPostsPage = () => {
  return (
    <main>
      {/* Posts */}
      <motion.section
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="py-10"
        id="posts"
      >
        <div className="max-w-2xl px-4 mx-auto">
          <div className="mb-8">
            <h2 className=" text-3xl font-bold md:text-4xl">Posts</h2>
          </div>

          <div className="space-y-6">
            {getAllPost().map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default AllPostsPage;
