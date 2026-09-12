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
          DEFAULT: "var(--primary)",
          light: "var(--primary-light)",
          dark: "var(--primary-dark)",
          mid: "var(--primary-mid)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          light: "var(--accent-light)",
          dark: "var(--accent-dark)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          light: "var(--secondary-light)",
          dark: "var(--secondary-dark)",
        },
        surface: {
          DEFAULT: "var(--surface)",
          elevated: "var(--surface-elevated)",
        },
        body: {
          DEFAULT: "var(--bg)",
          alt: "var(--bg-alt)",
          dark: "var(--bg-dark)",
        },
        content: {
          DEFAULT: "var(--text)",
          light: "var(--text-light)",
          muted: "var(--text-muted)",
        },
        edge: {
          DEFAULT: "var(--border)",
          light: "var(--border-light)",
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
