import React from "react";

const Footer = () => {
  return (
    <footer className="py-8 border-t">
      <div className="max-w-2xl mx-auto px-4 text-center ">
        <p>
          &copy; {new Date().getFullYear()} Amandeep Singh. All rights reserved.
        </p>
        <p className="mt-1 tracking-wide">
          Built with Next, Tailwind, Shadcn and{" "}
          <span className="text-lg">&#9829;</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
