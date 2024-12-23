/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths as needed
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5230B2", // Define your custom color
      },
      fontFamily: {
        montserrat: ['"Montserrat"', 'sans-serif'], // Add Montserrat font
      },
    },
  },
  plugins: [],
};
