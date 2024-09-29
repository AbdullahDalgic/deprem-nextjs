"use client";
import { useEffect } from "react";
import useTheme from "@/utils/store";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    document.body.classList.add(theme);
    return () => {
      document.body.classList.remove(theme);
    };
  }, [theme]);

  return (
    <>
      <nav
        className="switcher__tab"
        onClick={() =>
          theme == "light-theme"
            ? setTheme("dark-theme")
            : setTheme("light-theme")
        }
      >
        <span className="switcher__btn light-mode">
          <i className="flaticon-sun" />
        </span>
        <span className="switcher__mode" />
        <span className="switcher__btn dark-mode">
          <i className="flaticon-moon" />
        </span>
      </nav>
    </>
  );
}
