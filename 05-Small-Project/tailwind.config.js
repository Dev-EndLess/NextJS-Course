/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,css}",
    "./pages/**/*.{js,ts,jsx,tsx,css}",
    "./components/**/*.{js,ts,jsx,tsx,css}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
