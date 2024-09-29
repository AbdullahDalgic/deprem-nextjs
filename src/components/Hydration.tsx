"use client";

import * as React from "react";
import useTheme from "@/utils/store";

const Hydration = () => {
  React.useEffect(() => {
    useTheme.persist.rehydrate();
  }, []);

  return null;
};

export default Hydration;
