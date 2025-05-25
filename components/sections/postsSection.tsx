"use client";

import React from "react";
import { motion } from "motion/react";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import PostCard from "../shared/postCard";
import { BlogPost } from "@/types/BlogPost";

const Posts = ({ posts }: { posts: BlogPost[] }) => {
  return (
    <motion.section
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="py-10"
      id="posts"
    >
      <div className="max-w-2xl px-4 mx-auto">
        <div className="mb-8 flex justify-between items-end">
          <h2 className=" text-3xl font-bold md:text-4xl">Posts</h2>
          <Button asChild variant={"link"}>
            <Link href={"/posts"}>
              All posts <ArrowRight />
            </Link>
          </Button>
        </div>

        <div className="space-y-6">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Posts;
