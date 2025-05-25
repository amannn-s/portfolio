"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "motion/react";
import { skills } from "@/resources/static";

const WhatIWorkWith = () => {
  return (
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
  );
};

export default WhatIWorkWith;
