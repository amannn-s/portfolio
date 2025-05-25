"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Github from "@/components/icons/github";
import Instagram from "@/components/icons/instagram";
import Pin from "@/components/icons/pin";
import { Mail } from "lucide-react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <motion.section
      initial={{ y: 60, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeInOut", delay: 0.2 }}
      viewport={{ once: true }}
      className="py-10"
      id="hero"
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
  );
};

export default Hero;
