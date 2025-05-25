"use client";

import Link from "next/link";
import { motion } from "motion/react";
import React from "react";
import { experience } from "@/resources/static";

const Experience = () => {
  return (
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
  );
};

export default Experience;
