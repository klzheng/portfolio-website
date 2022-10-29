/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      animation: {
        'spin-ease': 'spin 1s ease-in-out infinite',
        'spin-slowest': 'spin 30s linear infinite',
      },
      backgroundImage: {
        'starry': "url('/public/background.svg')",
      },
      dropShadow: {
        'white': '0 0 50px rgba(255, 255, 255, .8)',
        'white-text': '0 0 2px rgba(255, 255, 255, .5)',
      },
    },
  },
  plugins: [],
}
