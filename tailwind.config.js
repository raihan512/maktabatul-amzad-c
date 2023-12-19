/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#108D41",
        white: "#FFFFFF",
        black: "#181818",
        black2: "#333333",
        gray: "#C4C4C4",
        red: "#F0141E",
        olive: "#95B32A",
        gold: "#F9AC20",
      },
    },
  },
  plugins: [],
};
