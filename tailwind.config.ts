import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/subcomponents/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        anta: ["var(--font-anta)", "sans-serif"],
        antic: ["var(--font-antic)", "sans-serif"],
        anton: ["var(--font-anton)", "sans-serif"],
      },
      colors: {
        // white
        primary: "#ffffff",
        // black
        secondary: "#000000",
      },
    },
  },
  plugins: [],
};

export default config;
