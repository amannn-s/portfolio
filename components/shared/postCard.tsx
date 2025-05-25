import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/types/BlogPost";

const PostCard = ({ post }: { post: BlogPost }) => {
  return (
    <Card className="gap-4">
      <CardHeader>
        <CardTitle className="text-lg md:text-xl text-neutral-800 dark:text-neutral-200 font-bold line-clamp-2">
          <Link href={`posts/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </CardTitle>
        <CardDescription className="text-base flex items-center gap-2">
          <p className="flex gap-1 items-center">
            <Calendar strokeWidth={1.5} size={16} />
            {post.date}
          </p>
          <p>|</p>
          <p className="flex gap-1 items-center">
            <Clock strokeWidth={1.5} size={16} />
            {post.estimatedReadTime}
          </p>
        </CardDescription>
      </CardHeader>
      <CardContent className="my-0">
        <p>{post.description}</p>
      </CardContent>
      <CardFooter>
        <div className="w-full  gap-4 flex flex-col md:flex-row justify-start items-start md:justify-between ">
          <div className="md:order-1">
            <Button asChild variant={"outline"} size={"sm"}>
              <Link
                href={`posts/${post.slug}`}
                className="text-primary text-sm hover:underline"
              >
                Read more <ArrowRight />
              </Link>
            </Button>
          </div>
          <div className="flex gap-2 md:order-0 items-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={post.author.avatar}
              alt={post.author.name}
              width={45}
              height={45}
              className="rounded-full"
            />

            <div className="flex flex-col">
              <Link
                href={post.author.social || "/"}
                target="_blank"
                className="hover:underline"
              >
                {post.author.name}
              </Link>
              <p className="text-neutral-600 dark:text-neutral-400">
                {post.author.role}
              </p>
            </div>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default PostCard;
