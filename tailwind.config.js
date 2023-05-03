/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Inter", "sans-serif"],
      jost: ["Jost", "sans-serif"],
      quest: ["Questrial", "sans-serif"],
      faito: ["Faito", "sans-serif"],
      outfit: ["Outfit", "sans-serif"],
      quicksand: ["Quicksand", "sans-serif"],
    },
  },
  screens: {
    phone: { min: "100px", max: "400px" },
    llg: "1350px",
  },
  plugins: [require("@tailwindcss/typography")],
};
