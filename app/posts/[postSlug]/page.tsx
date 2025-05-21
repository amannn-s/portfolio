"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPostBySlug } from "@/resources/posts";
import { useParams } from "next/navigation";
import React from "react";

const AllPostsPage = () => {
  const { postSlug: slug } = useParams();
  const postDetails = getPostBySlug(slug);
  return (
    <main>
      <section className="py-10">
        <div className="max-w-2xl px-4 mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-bold">
                {postDetails?.title}
              </CardTitle>
              <CardDescription>{postDetails?.description}</CardDescription>
            </CardHeader>
            <CardContent>{postDetails?.content()}</CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
};

export default AllPostsPage;
