import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      violet: {
        light: "#E645E8",
        dark: "#C12499",
      },
      orange: {
        light: "#F84944i",
        dark: "#CD2826",
      },
      yellow: {
        light: "#FFC54A",
        dark: "#F4A62C",
      },
      green: {
        light: "#00B587",
        dark: "#00897A",
      },
      blue: {
        light: "#6DD1F2",
        dark: "#469FE7",
      },
      purple: {
        light: "#7459F1",
        dark: "#5433F8",
      },
      pink: {
        light: "#FF76B6",
        dark: "#E645E8",
      },
    },

    extend: {
      fontFamily: {
        sans: ["var(--font-poppins)"],
        display: ["var(--font-bernoru)"],
      },
    },
  },
  plugins: [],
};
export default config;
