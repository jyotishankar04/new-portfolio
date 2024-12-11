"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import useTheme, { EThemes } from "@/store/utilsStore";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const { themes } = useTheme();
  console.log(themes);
  return (
    <NextThemesProvider {...props}>
      <div
        className={`${
          themes === EThemes.light ? "light" : "dark"
        } text-foreground bg-background`}
      >
        {children}
      </div>
    </NextThemesProvider>
  );
}
