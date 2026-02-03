import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class", // class-based dark mode
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "#B1023F",
          50: "#fef2f4",
          100: "#fde6ea",
          200: "#fbd1d9",
          300: "#f7a8b8",
          400: "#f1758f",
          500: "#e74c6d",
          600: "#B1023F",
          700: "#9a0235",
          800: "#81032d",
          900: "#6b0528",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
