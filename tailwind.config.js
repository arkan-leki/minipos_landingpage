/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: { 50: "#FBF8F1", 100: "#F4F0E6", 200: "#E8E2D3" },
        ink: { 900: "#07080D", 700: "#1A1F2A", 500: "#4A5160" },
        gold: { 500: "#FFB703", 600: "#E09F00", 700: "#A86F00" },
        teal: { 600: "#0A9E90", 700: "#0F7A66" },
      },
      fontFamily: {
        kufi: ['"Noto Kufi Arabic"', "Inter", "sans-serif"],
        sans: ['"Noto Sans Arabic"', "Inter", "sans-serif"],
        latin: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
}
