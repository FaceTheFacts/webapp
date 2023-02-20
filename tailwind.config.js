/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
      },
      colors: {
        'darkblue': '#181924',
        'darkblue-8': '#2A2B36',
        'darkblue-12': '#34353E',
        'darkblue-20': '#464750',
      },
    },
  plugins: [],
  }
}
