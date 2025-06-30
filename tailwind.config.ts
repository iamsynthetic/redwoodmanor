import type { Config } from "tailwindcss";

const config: Config = {
  content: {
    files: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
  },
  theme: {
    extend: {
      colors: {
        main: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
        },
        highlight: {
          DEFAULT: "rgb(var(--quinary) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--quaternary) / <alpha-value>)",
        },
        success: {
          DEFAULT: "rgb(var(--tertiary) / <alpha-value>)",
        },
        error: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
        },
        mutedmain: {
          DEFAULT: "rgb(var(--muted-primary) / <alpha-value>)",
        },
        mutedhighlight: {
          DEFAULT: "rgb(var(--muted-quinary) / <alpha-value>)",
        },
        mutedaccent: {
          DEFAULT: "rgb(var(--muted-quaternary) / <alpha-value>)",
        },
        mutedsuccess: {
          DEFAULT: "rgb(var(--muted-tertiary) / <alpha-value>)",
        },
        mutederror: {
          DEFAULT: "rgb(var(--muted-secondary) / <alpha-value>)",
        },
        greycolor: {
          DEFAULT: "rgb(var(--grey) / <alpha-value>)",
        },
        lightcolor: {
          DEFAULT: "rgb(var(--light) / <alpha-value>)",
        },
      },
    },
    screens: {
      xs: "320px",
      // => @media (min-width: 320px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }
      "2lg": "1180px",
      // => @media (min-width: 1024px) { ... }
      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (
    },
  },
};
export default config;
