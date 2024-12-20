"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { RainbowButton } from "./ui/rainbow-button";
import { NavMenuDb } from "@/utils/db";
import { MagicCard } from "./ui/magic-card";
import { useState } from "react";
import { Menu } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setTimeout(() => {
      setIsMenuOpen(false);
    }, 14000);
  };

  return (
    <>
      <div
        className={`fixed ${
          isMenuOpen ? "top-0 p-2  h-screen" : "top-2 h-auto"
        }  w-full z-[100] 2xl:z-0 2xl:h-auto flex justify-center`}
      >
        <MagicCard
          className={`2xl:w-6/12 duration-200 ease-linear ${
            isMenuOpen ? "w-full h-auto" : "w-10/12"
          }  flex flex-col p-4`}
        >
          <div className="w-full z-50 flex 2xl:flex-row items-center justify-between">
            <Link
              href={"/"}
              className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-purple-500/80 bg-clip-text text-center text-4xl font-semibold leading-none text-transparent dark:from-white dark:to-purple-500/80"
            >
              SJ.
            </Link>
            <div className=" items-center justify-center gap-5 2xl:flex hidden">
              {NavMenuDb.map((item) => {
                if (item.title === "Resume")
                  return (
                    <RainbowButton key={item.title} className="scale-75">
                      <Link
                        onClick={() => setIsMenuOpen(false)}
                        href={item.path}
                      >
                        {item.title}
                      </Link>
                    </RainbowButton>
                  );
                return (
                  <Button
                    key={item.title}
                    className="scale-125"
                    variant={item.varient as "link" | "default"}
                    size="sm"
                    asChild
                  >
                    <Link
                      onClick={() => {
                        setIsMenuOpen(false);
                      }}
                      href={item.path}
                    >
                      {item.title}
                    </Link>
                  </Button>
                );
              })}
              <div className="flex items-center gap-2 w-fit">
                <ThemeToggle />
              </div>
            </div>
            <div
              className="cursor-pointer 2xl:hidden flex items-center gap-3"
              onClick={toggleMenu}
            >
              <ThemeToggle />
              <Menu />
            </div>
          </div>
          <div
            className={`flex-col items-center mt-20 mb-10 justify-center gap-5 2xl:hidden flex ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            {NavMenuDb.map((item) => {
              if (item.title === "Resume")
                return (
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    href={item.path}
                    key={item.title}
                  >
                    <RainbowButton key={item.title} className="scale-75">
                      {item.title}
                    </RainbowButton>
                  </Link>
                );
              return (
                <Button
                  key={item.title}
                  className="scale-125"
                  variant={item.varient as "link" | "default"}
                  size="sm"
                  asChild
                >
                  <Link href={item.path} onClick={() => setIsMenuOpen(false)}>
                    {item.title}
                  </Link>
                </Button>
              );
            })}
          </div>
        </MagicCard>
      </div>
    </>
  );
};
export default Navbar;
