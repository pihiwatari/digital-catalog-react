/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#009ADD",
        },
        secondary: {
          DEFAULT: "#ED8B19",
        },
        background: {
          light: "#EDEDED",
          DEFAULT: "#C4C4C4",
          dark: "#A5A5A5",
        },
      },
    },
  },
  plugins: [],
};
