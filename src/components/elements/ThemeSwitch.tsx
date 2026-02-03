"use client";
import { useEffect } from "react";
import useTheme from "@/utils/store";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const root = document.documentElement;
    // Eski class'ları temizle
    root.classList.remove("light-theme", "dark-theme");
    document.body.classList.remove("light-theme", "dark-theme");
    
    // Yeni dark mode class'ını ekle
    if (theme === "dark-theme") {
      root.classList.add("dark");
      document.body.classList.add("dark-theme");
    } else {
      root.classList.remove("dark");
      document.body.classList.add("light-theme");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "light-theme" ? "dark-theme" : "light-theme";
    setTheme(newTheme);
  };

  return (
    <nav
      className="switcher__tab cursor-pointer"
      onClick={toggleTheme}
      role="button"
      aria-label="Toggle dark mode"
    >
      <span className="switcher__btn light-mode">
        <i className="flaticon-sun" />
      </span>
      <span className="switcher__mode" />
      <span className="switcher__btn dark-mode">
        <i className="flaticon-moon" />
      </span>
    </nav>
  );
}
