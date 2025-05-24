"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPostBySlug } from "@/resources/posts";
import { Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const AllPostsPage = () => {
  const { postSlug: slug } = useParams();
  const post = getPostBySlug(slug);
  return (
    <main>
      <section className="py-10">
        <div className="max-w-2xl px-4 mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl my-4 md:my-6 md:text-3xl font-bold">
                {post?.title}
              </CardTitle>

              <CardDescription className="text-base">
                {post?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>{post?.content()}</CardContent>

            <CardFooter>
              <div className="w-full flex justify-between items-stretch">
                <div className="flex gap-2 items-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={post?.author.avatar}
                    alt={post?.author.name}
                    width={45}
                    height={45}
                    className="rounded-full"
                  />

                  <div className="flex flex-col">
                    <Link
                      href={post?.author.social || "/"}
                      target="_blank"
                      className="hover:underline"
                    >
                      {post.author.name}
                    </Link>
                    <p className="text-neutral-600 dark:text-neutral-400">
                      {post?.author.role}
                    </p>
                  </div>
                </div>
                <CardDescription className="text-base flex flex-col items-end justify-end gap-1">
                  <p className="flex gap-1 items-center">
                    <Calendar strokeWidth={1.5} size={16} />
                    {post?.date}
                  </p>
                </CardDescription>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default AllPostsPage;
