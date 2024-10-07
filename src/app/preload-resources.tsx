"use client";

import { API_URL } from "@/utils/constants";
import ReactDOM from "react-dom";

export function PreloadResources() {
  ReactDOM.preload(API_URL, { as: "fetch" });
  ReactDOM.preconnect(API_URL);
  ReactDOM.prefetchDNS(API_URL);

  return null;
}
