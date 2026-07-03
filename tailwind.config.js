/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0a0e1a',
        'dark-blue': '#0f172a',
        primary: '#0f3b5e',
        'primary-light': '#1a4f6e',
        accent: '#10b981',
        'accent-dark': '#059669',
        'text-light': '#e2e8f0',
        'text-gray': '#94a3b8',
        'card-bg': '#1e293b',
        border: '#334155',
      }
    },
  },
  plugins: [],
}