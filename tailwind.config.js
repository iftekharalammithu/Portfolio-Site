import { tailwindPlugin } from "./src/Components/Lib";
import animatePlugin from "tailwindcss-animate";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        textcolor: "#ff4D00",
      },
      fontFamily: {
        marker: ['"Permanent Marker"', "cursive"],
      },
      fontWeight: {
        "extra-heavy": 1200, // Custom font weight
      },
    },
  },
  plugins: [tailwindPlugin, animatePlugin],
};
