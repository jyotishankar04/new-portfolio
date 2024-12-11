import { create } from "zustand";
export enum EThemes {
  light = "light",
  dark = "dark",
  default = "default",
}

const useTheme = create<{ themes: EThemes; toggleTheme: () => void }>(
  (set) => ({
    themes: EThemes.dark,
    setTheme: (theme: EThemes) => set({ themes: theme }),
    toggleTheme: () =>
      set((state) => ({
        themes: state.themes === EThemes.dark ? EThemes.light : EThemes.dark,
      })),
  })
);
export default useTheme;
