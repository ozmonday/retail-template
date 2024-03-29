/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,html}",
    "./components/**/*.{js, jsx, html}"
  ],
  theme: {
    extend: {},
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
