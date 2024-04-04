/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'head': "url('/assets/headerImage.jpg')",
      },
  }
  },
  plugins: [],
}