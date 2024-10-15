/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        'pop': ["Poppins"],
      },
      colors: {
        'bgcolor': '#FAE3B6',
        'btncolor': '#FDBB57',
      },
    },
  },
  plugins: [],
}

