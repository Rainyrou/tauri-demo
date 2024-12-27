/** @type {import('tailwindcss').Config} */
import presets from "./tailwind-presets";

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [],
  theme: {
    extend: {},
  },
  plugins: [presets],
};
