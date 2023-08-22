import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          50: "#F3FDFE",
          100: "#E1F9FD",
          200: "#BCEBF9",
          300: "#8ED6F4",
          400: "#53B3ED",
          500: "#3288E0",
          600: "#235DA3",   
          700: "#174176",
          800: "#102851",   
          900: "#0A1B37",  
        },
        secondary: {         //30
          50: "#F9FBFD",
          100: "#F2F7FB",
          200: "#DCEBFA",
          300: "#B8D1F8",
          400: "#84A9F5",
          500: "#627EF0",
          600: "#505CC6",
          700: "#3B449D",
          800: "#2B3077",
          900: "#1E2455",
        },
        accent: {           //10
          50: "#FFF9F0",
          100: "#FEF3DB",
          200: "#FCE3B3",
          300: "#F9C86E",
          400: "#F6A130",
          500: "#F08400",
          600: "#D86700",
          700: "#B94E00",
          800: "#953B00",
          900: "#7A2E00",
        },
      },
      fontFamily: {
        'display':'var(--font-display), -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue',
        'body': 'var(--font-body), -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue',
      }
    },
  },
  plugins: [],
};
export default config;
