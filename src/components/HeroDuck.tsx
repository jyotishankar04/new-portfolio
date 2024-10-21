import React from "react";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { DockData } from "@/utils/db";
import { Dock, DockIcon } from "@/components/ui/dock";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <TooltipProvider>
      <Dock
        direction="middle"
        magnification={60}
        className="border-2 border-purple-600"
      >
        {Object.entries(DockData.contact.social).map(([name, social]) => (
          <DockIcon
            key={name}
            className="bg-black/10 dark:bg-white/10 dp-1"
            size={60}
          >
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  aria-label={social.name}
                  className={cn(
                    buttonVariants({ variant: "secondary", size: "icon" }),
                    "size-12 rounded-full"
                  )}
                  target="_blank"
                >
                  <social.icon className="size-4" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        {/* <BorderBeam size={500} duration={5} borderWidth={2} delay={0} /> */}
      </Dock>
    </TooltipProvider>
  );
}
