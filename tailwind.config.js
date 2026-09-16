/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "rgb(var(--primary-rgb) / <alpha-value>)",
          light: "rgb(var(--primary-light-rgb) / <alpha-value>)",
          dark: "rgb(var(--primary-dark-rgb) / <alpha-value>)",
          mid: "rgb(var(--primary-mid-rgb) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent-rgb) / <alpha-value>)",
          light: "rgb(var(--accent-light-rgb) / <alpha-value>)",
          dark: "rgb(var(--accent-dark-rgb) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary-rgb) / <alpha-value>)",
          light: "rgb(var(--secondary-light-rgb) / <alpha-value>)",
          dark: "rgb(var(--secondary-dark-rgb) / <alpha-value>)",
        },
        surface: {
          DEFAULT: "rgb(var(--surface-rgb) / <alpha-value>)",
          elevated: "rgb(var(--surface-elevated-rgb) / <alpha-value>)",
        },
        body: {
          DEFAULT: "rgb(var(--bg-rgb) / <alpha-value>)",
          alt: "rgb(var(--bg-alt-rgb) / <alpha-value>)",
          dark: "rgb(var(--bg-dark-rgb) / <alpha-value>)",
        },
        content: {
          DEFAULT: "rgb(var(--text-rgb) / <alpha-value>)",
          light: "rgb(var(--text-light-rgb) / <alpha-value>)",
          muted: "rgb(var(--text-muted-rgb) / <alpha-value>)",
        },
        edge: {
          DEFAULT: "rgb(var(--border-rgb) / <alpha-value>)",
          light: "rgb(var(--border-light-rgb) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "var(--font-ibm-arabic)", "sans-serif"],
        ibm: ["var(--font-ibm-arabic)", "sans-serif"],
        heading: ["var(--font-outfit)", "var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        container: "var(--container-max)",
      },
      screens: {
        xs: "480px",
        "3xl": "1920px",
      },
      backgroundImage: {
        "gradient-hero": "var(--gradient-hero)",
        "gradient-cta": "var(--gradient-cta)",
        "gradient-dark": "var(--gradient-dark)",
        "gradient-shimmer": "var(--gradient-shimmer)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
