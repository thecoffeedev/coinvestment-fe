/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        primaryPurple: "#0C056D",
        secondaryPurple: "#11079E",
        primaryDark: "#07033C",
        primaryLight: "#E6E6E6",
      },
    },
  },
  plugins: [],
};
