"use client";

import { cn } from "@/lib/utils";
import GridPattern from "./ui/grid-pattern";
import TypingAnimation from "./ui/typing-animation";

import { DockDemo } from "./HeroDuck";

export function GridPatternLinearGradient() {
  return (
    <div
      id={"#"}
      className="w-full  relative h-screen flex flex-col justify-start items-center"
    >
      <div className="grow z-0 flex flex-col items-center gap-5 justify-center">
        <h1 className="xl:text-4xl text-3xl font-bold text-purple-600">
          Hi, I&apos;m
        </h1>
        <TypingAnimation
          text="Jyotishankar Patra"
          className="xl:text-6xl text-4xl selection:bg-purple-600 selection:text-primary"
          duration={100}
          key={"typing-animation"}
        />

        <p className="text-center w-10/12">
          <span className="font-semibold  xl:text-lg text-sm text-purple-600">
            Delivering High-Performance Websites and Applications for Your
            Success
          </span>
          ,
        </p>
      </div>
      <div className="absolute xl:bottom-10 bottom-20   translate-x-[-50%] left-1/2">
        <DockDemo />
      </div>
      <GridPattern
        width={80}
        height={80}
        x={50}
        y={50}
        squares={[
          [4, 4],
          [5, 1],
          [8, 2],
          [5, 3],
          [5, 5],
          [10, 10],
          [12, 15],
          [15, 10],
          [10, 15],
          [15, 10],
          [10, 15],
          [15, 10],
        ]}
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12"
        )}
      />
    </div>
  );
}
