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
import { BorderBeam } from "./ui/border-beam";

export type IconProps = React.HTMLAttributes<SVGElement>;

export function DockDemo() {
  return (
    <TooltipProvider>
      <Dock direction="middle" magnification={100} className="">
        {Object.entries(DockData.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href={social.url}
                  aria-label={social.name}
                  className={cn(
                    buttonVariants({ variant: "ghost", size: "icon" }),
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
        <BorderBeam size={500} duration={5} delay={0} />
      </Dock>
    </TooltipProvider>
  );
}
