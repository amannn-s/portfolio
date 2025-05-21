"use client";

import React, { useEffect, useState } from "react";
import { AlignRight, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { Dialog, DialogPanel } from "@headlessui/react";
import Image from "next/image";

const Header = () => {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true); // Avoid SSR mismatch
  }, []);
  if (!mounted) {
    return null; // Or show a placeholder/skeleton
  }
  const logoSrc =
    theme === "dark"
      ? "/images/amandeep-singh-text-light.svg"
      : "/images/amandeep-singh-text-dark.svg";

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
            <Link href={"/"}>
              <span className="sr-only">Amandeep Singh</span>
              <Image
                src={logoSrc}
                alt="Amandeep Singh logo"
                width={200}
                height={60}
                priority
                className="object-contain h-auto w-52"
              />
            </Link>
          </h2>

          <nav className="hidden md:block">
            <ul className="flex item-center gap-1">
              {navLinks.map(({ id, title, path }) => {
                return (
                  <li key={id}>
                    <Button asChild variant={"ghost"}>
                      <Link href={path}>{title}</Link>
                    </Button>
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            {/* theme toggle */}
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

            <div className="flex lg:hidden">
              <button
                type="button"
                onClick={() => setMobileMenuOpen(true)}
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 cursor-pointer"
              >
                <span className="sr-only">Open main menu</span>
                <AlignRight aria-hidden="true" className="size-6" />
              </button>
            </div>
          </div>

          {/* mobile */}
          <Dialog
            open={mobileMenuOpen}
            onClose={setMobileMenuOpen}
            className="block md:hidden"
          >
            <DialogPanel className="fixed inset-y-0 right-0 z-20 w-[75%] overflow-y-auto bg-background/20 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 backdrop-blur-2xl flex flex-col">
              <div className="flex items-center justify-end">
                <Button
                  variant={"ghost"}
                  size={"icon"}
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="-m-2.5 cursor-pointer"
                >
                  <span className="sr-only">Close menu</span>
                  <X aria-hidden="true" className="size-6" />
                </Button>
              </div>
              <div className="mt-6 flow-root flex-col flex-1">
                <div className="divide-y divide-gray-500/10 h-full">
                  <ul className="h-full space-y-12 py-6 flex flex-col justify-center items-end">
                    {navLinks.map(({ id, title, path }) => (
                      <li
                        key={id}
                        className="hover:scale-110 hover:-translate-x-4 transition-all duration-200"
                      >
                        <Button
                          asChild
                          variant={id === 1 ? "link" : "link"}
                          size={"lg"}
                          className="text-lg"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <Link href={path}>{title}</Link>
                        </Button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogPanel>
          </Dialog>
        </div>
      </div>
    </header>
  );
};

export default Header;
