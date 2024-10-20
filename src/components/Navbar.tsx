"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { RainbowButton } from "./ui/rainbow-button";
import { NavMenuDb } from "@/utils/db";
import { DockDemo } from "./HeroDuck";
import { MagicCard } from "./ui/magic-card";
import { useState } from "react";
import { Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <>
      <div className="fixed top-5 w-full z-50 2xl:z-0 h-auto flex justify-center">
        <MagicCard
          className={`2xl:w-6/12 duration-200 ease-linear ${
            isMenuOpen ? "w-full h-screen" : "w-10/12"
          }  flex flex-col p-4`}
        >
          <div className="fixed bottom-10 translate-x-[-50%] left-1/2">
            <DockDemo />
          </div>
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
                      <Link href={item.path}>{item.title}</Link>
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
                    <Link href={item.path}>{item.title}</Link>
                  </Button>
                );
              })}
            </div>
            <div
              className="cursor-pointer 2xl:hidden"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
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
                  <RainbowButton key={item.title} className="scale-75">
                    <Link href={item.path}>{item.title}</Link>
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
                  <Link href={item.path}>{item.title}</Link>
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
