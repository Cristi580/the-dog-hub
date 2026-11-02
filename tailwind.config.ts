import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f2f7f4",
          100: "#e0ede4",
          200: "#c3dbcb",
          300: "#98c1a7",
          400: "#689f7e",
          500: "#468260",
          600: "#2d5a40",
          700: "#244834",
          800: "#1b3627",
          900: "#14291d",
          950: "#0b1710",
        },
        terracotta: {
          50: "#fdf5f3",
          100: "#fbe8e3",
          200: "#f7d5cc",
          300: "#f0b7a8",
          400: "#e58d76",
          500: "#d6684b",
          600: "#c45133",
          700: "#a33f26",
          800: "#873622",
          900: "#703122",
        },
        cream: {
          50: "#fdfcfa",
          100: "#f9f6f0",
          200: "#f2ece1",
          300: "#e6dcc9",
          400: "#d5c5a9",
        },
        charcoal: {
          800: "#262925",
          900: "#1a1c19",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        serif: ["var(--font-fraunces)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
