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
      quicksand: ["Quicksand", "sans-serif"],
      aleg: ["Alegreya", "sans-serisf"],
    },
    screens: {
      phone: { min: "100px", max: "400px" },
      llg: "1350px",
      xs: "0px",
      sm: "600px",
      md: "900px",
      lg: "1200px",
      xl: "1536px",
      "2xl": "1536px",
    },
  },

  plugins: [require("@tailwindcss/typography")],
};
