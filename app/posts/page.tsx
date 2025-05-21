"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { getAllPost } from "@/resources/posts";

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
              <Card key={post.id} className="border-b pb-4">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">
                    {post.title}
                  </CardTitle>
                  <CardDescription className="text-sm ">
                    {post.date}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p>{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button asChild variant={"outline"} size={"sm"}>
                    <Link
                      href={`posts/${post.slug}`}
                      className="text-primary text-sm hover:underline"
                    >
                      Read more <ArrowRight />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </motion.section>
    </main>
  );
};

export default AllPostsPage;
