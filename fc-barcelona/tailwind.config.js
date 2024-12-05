/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: ["Petrona", "sans-serif"],
      },
      colors: {
        bgBlack: "#000807", // Replace with your HEX color
        hwhite: "#F5F6F4",
      },
    },
  },
  plugins: [],
};
