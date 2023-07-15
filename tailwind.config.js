/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,vue,js,ts}"],
  theme: {
    extend: {
      backgroundColor: {
        primary: "lightblue",
      },
      colors: {
        primary: "#ff0000",
        secondary: "#00ff00",
      },
      fontSize: {
        "2xl": "1.5rem",
        "3xl": "2rem",
      }
      
    },
  },
  plugins: [],
};
