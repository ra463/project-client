/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      xll: { max: "1535px" },
      xl: { max: "1279px" },
      lg: { max: "1023px" },
      md: { max: "800px" },
      sm: { max: "639px" },
    },
    colors: {
      primary: "#1c1c1e",
      input: "#313133",
      btn: "#f96d00",
      tag: "#98a6ad",
      green: "#10c469",
      lightgreen: "rgb(22 163 74)",
      red: "rgb(185 28 28)",
    },
    boxShadow: {
      xll: "0 5px 10px rgba(255, 255, 255, 0.1)",
    },
    height: {
      xll: "86.7vh",
    },
  },
  plugins: [],
};
