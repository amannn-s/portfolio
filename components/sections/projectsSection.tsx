"use client";

import React from "react";
import { motion } from "motion/react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TracingBeam } from "../ui/tracing-beam";
import { projectsList } from "@/resources/static";
import Image from "next/image";

const Projects = () => {
  return (
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
                      className="object-cover w-full aspect-[16/9] group-hover:scale-105 transition-all duration-400 opacity-100 group-hover:opacity-100"
                    />
                  )}
                  <div className="absolute bottom-3 translate-y-full -translate-x-1/2 rounded-lg left-1/2 w-[96%] bg-accent/90 transition-all duration-300 opacity-0 group-hover:opacity-100 group-hover:translate-y-0">
                    <div className="flex gap-1 backdrop-blur-md rounded md:gap-2 py-2 md:py-4 px-2 md:px-4 flex-wrap">
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
    </motion.section>
  );
};

export default Projects;
