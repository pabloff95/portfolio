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
        primary: "var(--primary-element)",
        "primary-dark": "var(--primary-element-dark)",
        "primary-contrast": "var(--primary-element-contrast)",
        "dark-bg": "var(--bg-color-dark)",
        "layout-bg": "var(--bg-color)",
      },
    },
  },
  plugins: [],
};
