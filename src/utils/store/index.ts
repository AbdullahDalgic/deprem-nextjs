import { create } from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light-theme" | "dark-theme";

interface ThemeStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
}

const useTheme = create<ThemeStore>()(
  persist(
    (set) => ({
      theme: "light-theme",
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: "theme",
    }
  )
);

export default useTheme;
