/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        purpleMain: "#7b2cbf",
        darkBg: "#070707",
      },
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        heading: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
