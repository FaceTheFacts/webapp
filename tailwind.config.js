const { fontFamily } = require('tailwindcss/defaultTheme')

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
        sans: ['var(--font-inter)', ...fontFamily.sans],
      },
      colors: {
        'darkblue': '#181924',
        'darkblue-8': '#2A2B36',
        'darkblue-12': '#34353E',
        'darkblue-20': '#464750',
      },
      borderRadius: {
        'large': '32px',
      },
      spacing: {
        '0.875': '0.219rem',
        '1.75': '0.438rem',
        '2.5': '0.625rem',
        '5.75': '1.438rem',
        '6': '1.5rem',
        '22.75': '5.688rem',
        '29.5': '7.375rem',
      },
    },
  plugins: [],
  }
}
