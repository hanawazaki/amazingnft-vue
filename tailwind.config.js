/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        'priMain': '#110929',
        'priHover': '#080414',
        'priPressed': '#39324D',
        'secMain': '#1C51FE',
        'secHover': '#1336A9',
        'secPressed': '#0E297F'
      }
    },
  },
  plugins: [],
}

