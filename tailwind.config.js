/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        chalk: "var(--font-chalk)",
        impact: "var(--font-impact)",
      },
      colors: {
        "font-base": "var(--text-color)",
        "primary-background": "var(--primary-background)",
        "secondary-background": "var(--secondary-background)",
        primary: "var(--primary-element)",
        "primary-contrast": "var(--primary-element-contrast)",
        "primary-lighter-contrast": "var(--primary-element-lighter-contrast)",
        "primary-dark": "var(--primary-element-dark)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
