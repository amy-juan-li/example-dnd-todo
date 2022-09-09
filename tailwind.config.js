/** @type {import('tailwindcss').Config} */
module.exports = {
 content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ], 
  theme: {
    extend: {
      boxShadow: {
        'full': '0 0 10px 1000px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}
