/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        "images":"url('./src/assets/Images/*.{png, jpg, jpeg, webp, svg} "
      }
    },
  },
  plugins: [],
}