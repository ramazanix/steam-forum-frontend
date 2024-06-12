import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background-color))",
        first: "rgb(var(--first-color))",
        second: "rgb(var(--second-color))",
        third: "rgb(var(--third-color))",
        fourth: "rgb(var(--fourth-color))",
        fifth: "rgb(var(--fifth-color))",
      },
    },
  },
  plugins: [],
};
export default config;
