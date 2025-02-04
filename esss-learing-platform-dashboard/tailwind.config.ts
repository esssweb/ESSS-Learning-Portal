import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Keep your SofiaPro font definitions
        SofiaProSemiBoldItalic: ["SofiaProSemiBoldItalic", "sans-serif"],
        SofiaProSemiBold: ["SofiaProSemiBold", "sans-serif"],
        // ... (keep all other font definitions from your user-side project)
        AbolitionTestRegular: ["AbolitionTestRegular"],
      },
      colors: {
        Quinary: "#707070",
        Quaternary: "#ADADAD",
        Tertiary: "#F8F7F4",
        Secondary: "#E0F869",
        Primary: "#072434",
        Senary: "#03800C",
      },
    },
    keyframes: {
      shimmer: {
        "100%": {
          transform: "translateX(100%)",
        },
      },
      popupin: {
        to: {
          right: "4px",
        },
      },
    },
  },
  plugins: [],
};

export default config;
