/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/page.tsx}', // Adjust if you have components in different directories
    './components/TodoList.tsx.{js,ts,jsx,tsx}',
    
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
