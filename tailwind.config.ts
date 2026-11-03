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
        primary: {
          DEFAULT: "#9dc183", // Sage Green
          light: "#b5d1a0",
          dark: "#82ab66",
        },
        accent: {
          DEFAULT: "#c18883", // Dusty Rose
          light: "#d1a39f",
          dark: "#ad6f6a",
        },
        highlight: {
          DEFAULT: "#83bcc1", // Soft Teal
          light: "#a3cfd3",
          dark: "#66a6ac",
        },
        sage: "#9dc183",
        dustyRose: "#c18883",
        softTeal: "#83bcc1",
        cream: {
          50: "#fdfcfa",
          100: "#f9f6f0",
          200: "#f2ece1",
          300: "#e6dcc9",
          400: "#d5c5a9",
        },
        charcoal: {
          800: "#1f2937",
          900: "#111827",
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
