/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#b3e1f5",
          DEFAULT: "#009ADD",
          dark: "#007bb1",
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
