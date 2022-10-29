/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 30s linear infinite',
      },
      backgroundImage: {
        'starry': "url('/public/background.svg')",
      }
    },
  },
  plugins: [],
}
