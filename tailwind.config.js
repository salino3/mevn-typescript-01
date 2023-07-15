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
   
      
    },
  },
  plugins: [],
};
