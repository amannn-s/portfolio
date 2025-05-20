"use client";

import React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const Header = () => {
  const { setTheme } = useTheme();

  const navLinks = [
    { id: 1, title: "My Work", path: "#" },
    { id: 3, title: "Experience", path: "#experience" },
    { id: 2, title: "Projects", path: "#projects" },
    { id: 4, title: "Posts", path: "#posts" },
    { id: 5, title: "Contact me", path: "#contact-me" },
  ];

  return (
    <header>
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center px-4 py-6">
          <h2 className="font-semibold text-xl">
            <Link href={"/"}>Amandeep Singh</Link>
          </h2>

          <nav>
            <ul className="flex item-center gap-1">
              {navLinks.map(({ id, title, path }) => (
                <li key={id}>
                  <Button asChild variant={id === 1 ? "secondary" : "ghost"}>
                    <Link href={path}>{title}</Link>
                  </Button>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                  Light
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                  Dark
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("system")}>
                  System
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
