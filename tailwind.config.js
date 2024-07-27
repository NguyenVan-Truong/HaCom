/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': '#F5F5F5', 
        'custom-yellow': '#fff46d',
      },
      boxShadow: {
        'custom-gray': '0 5px 10px 2px rgba(255, 10, 50, 30.3)', 
      }
    },
  },
  plugins: [],
}
