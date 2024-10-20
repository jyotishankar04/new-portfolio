"use client";

import { cn } from "@/lib/utils";
import GridPattern from "./ui/grid-pattern";
import TypingAnimation from "./ui/typing-animation";

import Navbar from "./Navbar";

export function GridPatternLinearGradient() {
  return (
    <div className="w-full flex-col h-full flex justify-start gap-4 items-center">
      <Navbar />
      <div className="grow flex items-center flex-col gap-5 justify-center">
        <h1 className="xl:text-3xl text-2xl font-bold text-purple-600">
          Hi, I&apos;m
        </h1>
        <TypingAnimation
          text="Jyotishankar Patra"
          className="xl:text-6xl text-3xl selection:bg-purple-600 selection:text-primary"
          duration={100}
          key={"typing-animation"}
        />

        <p className="text-center">
          <span className="font-semibold xl:text-lg text-sm text-purple-600 ">
            Delivering High-Performance Websites and Applications for Your
            Success
          </span>
          ,
        </p>
      </div>

      <GridPattern
        width={80}
        height={80}
        x={-1}
        y={-1}
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)] -z-20"
        )}
      />
    </div>
  );
}
