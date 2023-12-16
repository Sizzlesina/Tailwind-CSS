/**
 * @format
 * @type {import('tailwindcss').Config}
 */

// eslint-disable-next-line
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        mint: "#00d1ad",
      },
    },
  },
  plugins: [],
};
