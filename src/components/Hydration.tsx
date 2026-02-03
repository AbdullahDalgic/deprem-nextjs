"use client";

import * as React from "react";
import useTheme from "@/utils/store";

const Hydration = () => {
  React.useEffect(() => {
    useTheme.persist.rehydrate();
    
    // Store rehydrate edildikten sonra theme'i ayarla
    const theme = useTheme.getState().theme;
    const root = document.documentElement;
    if (theme === "dark-theme") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, []);

  return null;
};

export default Hydration;
