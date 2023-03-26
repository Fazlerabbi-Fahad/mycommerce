/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  themes: ['light', 'dark'],
  plugins: [require("daisyui")],
}