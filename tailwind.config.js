/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#242424",
        primary: "#4d4d4d",
      },
      fontFamily: {
        sans: ["Zen Kaku Gothic Antique", "sans-serif"],
      },
    },
  },
  plugins: [],
};
