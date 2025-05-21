"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { ArrowRight, ArrowUp, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { experience, projectsList, skills } from "@/resources/static";
import { getLatestPost } from "@/resources/posts";

export default function HomePage() {
  return (
    <main>
      <Button asChild variant={"outline"} className="fixed bottom-10 right-10">
        <Link href={"#bio-section"}>
          <ArrowUp />
        </Link>
      </Button>
      {/* Bio */}
      <motion.section
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="py-10"
        id="bio-section"
      >
        <div className="max-w-2xl px-4 mx-auto">
          <Card>
            <CardHeader className="flex justify-between">
              <div>
                <CardTitle className="text-3xl md:text-4xl">
                  Amandeep Singh
                </CardTitle>
                <CardDescription>
                  <div className="flex text-lg items-center text-primary">
                    <Pin className="fill-primary size-4" />
                    Mayur Vihar, Delhi
                  </div>
                </CardDescription>
              </div>
              <div className="flex gap-1">
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="cursor-pointer"
                >
                  <Mail />
                </Button>
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="cursor-pointer"
                >
                  <Github className="dark:fill-white" />
                </Button>
                <Button
                  variant={"outline"}
                  size={"icon"}
                  className="cursor-pointer"
                >
                  <Instagram className="dark:fill-white" />
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-base md:text-lg">
                Full-stack developer with experience in MERN, React Native, and
                Java. I build web and mobile apps and am open to jobs and
                freelance work.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* What I work with */}
      <motion.section
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="py-10"
      >
        <div className="max-w-2xl px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">
            What I work with
          </h2>

          <div className="grid grid-cols-12 gap-2">
            {skills.map((group) => {
              return (
                <Card key={group.category} className="col-span-6 gap-2">
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-primary">
                      {group.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-1 text-sm md:text-base">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="pl-2 before:content-['•'] before:mr-2"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Experience */}
      <motion.section
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="py-10"
        id="experience"
      >
        <div className="max-w-2xl px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Experience</h2>

          <div className="space-y-6">
            {experience.map(
              ({ id, path, company, designation, duration, description }) => (
                <article key={id}>
                  <Link
                    href={path}
                    target="_blank"
                    className="text-primary hover:underline"
                  >
                    <i>{company}</i>
                  </Link>
                  <h3 className="text-xl font-semibold md:text-2xl">
                    {designation}
                  </h3>
                  <h5 className="text-muted-foreground mb-2">{duration}</h5>
                  <p className="text-base">{description}</p>
                </article>
              )
            )}
          </div>
        </div>
      </motion.section>

      {/* Projects */}
      <motion.section
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="py-10"
        id="projects"
      >
        <div className="max-w-2xl px-4 mx-auto">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Projects</h2>
        </div>
        <Projects />
      </motion.section>

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
          <div className="mb-8 flex justify-between items-end">
            <h2 className=" text-3xl font-bold md:text-4xl">Posts</h2>
            <Button asChild variant={"link"}>
              <Link href={"/posts"}>
                All posts <ArrowRight />
              </Link>
            </Button>
          </div>

          <div className="space-y-6">
            {getLatestPost().map((post) => (
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

      {/* Contact */}
      <motion.section
        initial={{ y: 60, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
        viewport={{ once: true }}
        className="py-10"
        id="contact-me"
      >
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="mb-8 text-3xl font-bold md:text-4xl">Contact</h2>
          <p className="md:text-lg mb-6">
            Interested in working together or have a question? Feel free to
            reach out.
          </p>

          <div className="space-y-2 font-medium">
            <p>
              Email:{" "}
              <Link
                href="mailto:aman230630@gmail.com"
                className="text-primary hover:underline font-normal"
              >
                aman230630@gmail.com
              </Link>
            </p>
            <p>
              LinkedIn:{" "}
              <Link
                href="https://linkedin.com/in/aman"
                target="_blank"
                className="text-primary hover:underline font-normal"
              >
                linkedin.com/in/aman
              </Link>
            </p>
            <p>
              GitHub:{" "}
              <Link
                href="https://github.com/amannn-s"
                target="_blank"
                className="text-primary hover:underline font-normal"
              >
                github.com/amannn-s
              </Link>
            </p>
          </div>
        </div>
      </motion.section>
    </main>
  );
}

function Projects() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl px-4 mx-auto antialiased pt-4 relative">
        {projectsList.map((item, index) => (
          <Card key={`content-${index}`} className="mb-10 group">
            <CardHeader>
              <h2 className="bg-secondary text-secondary-foreground rounded-full text-sm w-fit px-4 py-1">
                {item.badge}
              </h2>

              <p className={"text-xl mb-2 text-primary"}>{item.title}</p>
            </CardHeader>

            <CardContent>
              <div className="rounded-md relative overflow-hidden mb-6 ring-2 ring-accent">
                {item?.image && (
                  <Image
                    src={item.image}
                    alt="blog thumbnail"
                    height="1920"
                    width="910"
                    className="object-cover w-full aspect-[16/9] group-hover:scale-105 transition-all duration-400 opacity-80 group-hover:opacity-100"
                  />
                )}
                <div className="absolute bottom-3 translate-y-full -translate-x-1/2 rounded-lg left-1/2 w-[96%] bg-accent/90 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                  <div className="flex gap-1 md:gap-2 py-2 md:py-4 px-2 md:px-4 flex-wrap">
                    {item.technologies.map((el, i) => (
                      <span
                        key={i}
                        className="bg-accent text-sm md:text-base text-accent-foreground rounded-full px-2.5"
                      >
                        {el}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <>{item.description}</>
            </CardContent>
          </Card>
        ))}
      </div>
    </TracingBeam>
  );
}

const Github = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitHub</title>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
};

const Instagram = ({ className }: { className: string }) => {
  return (
    <svg
      className={className}
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Instagram</title>
      <path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" />
    </svg>
  );
};

const Pin = ({ className }: { className: string }) => {
  return (
    <svg
      width={18}
      height={18}
      className={className}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.2 4.19995C7.2 3.20584 8.00588 2.39995 9 2.39995C9.99412 2.39995 10.8 3.20584 10.8 4.19995C10.8 5.19407 9.99412 5.99995 9 5.99995C8.00588 5.99995 7.2 5.19407 7.2 4.19995ZM9.6 7.13994C10.9693 6.86198 12 5.65133 12 4.19995C12 2.5431 10.6569 1.19995 9 1.19995C7.34315 1.19995 6 2.5431 6 4.19995C6 5.65133 7.03066 6.86198 8.4 7.13994V16.2C8.4 16.5313 8.66863 16.8 9 16.8C9.33137 16.8 9.6 16.5313 9.6 16.2V7.13994Z"
      />
    </svg>
  );
};
