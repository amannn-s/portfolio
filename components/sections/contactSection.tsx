"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";

const Contact = () => {
  return (
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
          Interested in working together or have a question? Feel free to reach
          out.
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
              href="https://www.linkedin.com/in/amandeep-singh-it-developer/"
              target="_blank"
              className="text-primary hover:underline font-normal"
            >
              linkedin.com/in/amandeep-singh-it-developer
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
  );
};

export default Contact;
