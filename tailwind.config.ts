import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ECF0F1",
        header: "#2C3E50",
        text_dark: "#FFFFFF",
        button: "#1ABC9C",
        accent_1: "#E67E22",
        accent_2: "#1ABC9C",
        shadow: "#BDC3C7",
      },
      backgroundImage: {
        sprinkle: "url(/Sprinkle.svg)",
      },
    },
  },
  plugins: [],
};
export default config;
