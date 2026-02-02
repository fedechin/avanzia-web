import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1E4B8E",
          50: "#E8EEF6",
          100: "#D1DDEE",
          200: "#A3BBDD",
          300: "#7599CC",
          400: "#4777BB",
          500: "#1E4B8E",
          600: "#183C72",
          700: "#122D55",
          800: "#0C1E39",
          900: "#060F1C",
        },
      },
    },
  },
  plugins: [],
};

export default config;
