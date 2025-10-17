import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/slices/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#236bdc",
        "50": "#eff8ff",
        "100": "#dceefd",
        "200": "#c1e3fc",
        "300": "#96d2fa",
        "400": "#64b8f6",
        "500": "#409af1",
        "600": "#2a7de6",
        "700": "#236bdc",
        "800": "#2253ab",
        "900": "#214887",
        "950": "#192d52",
        "1000": "#061328",
      },
      gray: {
        DEFAULT: "#151517",
        "50": "#f7f7f8",
        "100": "#eeeef0",
        "200": "#dadadd",
        "300": "#b9bac0",
        "400": "#93949d",
        "500": "#757682",
        "600": "#5f5f6a",
        "700": "#4e4e56",
        "800": "#42424a",
        "900": "#3a3a40",
        "950": "#151517",
      },
      white: "#FFFFFF",
      black: "#151517",
      green: "#cad178", 
      red: "#c03221"
    },
    fontFamily: {
      display: ["Aileron", "sans-serif"],
      sans: ["Aileron", "sans-serif"],
      serif: ["EB Garamond Variable", "serif"],
      "sans-condensed": ["Aileron", "sans-serif"],
    },
    extend: {
    },
  },
  plugins: [],
};
export default config;
