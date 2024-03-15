import {fontFamily} from "tailwindcss/defaultTheme";
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // "color-1": "#1a2a37",
        "color-2": "#042641",
        "color-1":"#001220",
        "color-3": "#04264163",
        "color-4": "#F1C680",
        "color-5": "#FFFFFF",
      },
      fontFamily: {
        popins: ["var(--font-poppins)", ...fontFamily.serif],
    },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      screens:{
        'xls':'910px'
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
}