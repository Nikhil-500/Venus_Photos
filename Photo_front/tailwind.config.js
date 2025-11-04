/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        purpleMain: "#7b2cbf",
        darkBg: "#070707"
      },
      fontFamily: {
        display: ["Poppins", "Inter", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};
