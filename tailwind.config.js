/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#111111",
        b1: "#FFFFFF",
        highlight: "#2E2E2E",
        footer: "#171717",
        icon: "#FDD65B",
        onHover: "#E3B748"
      }
    },
  },
  plugins: [],
}