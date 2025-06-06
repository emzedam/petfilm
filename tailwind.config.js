/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'selector',
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
    './nuxt.config.ts'
  ],
  theme: {
    fontFamily: {
      'amir': ['Vazirmatn'],
    },
    extend: {},
  },
  plugins: [],
}