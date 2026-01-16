/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist Sans"', 'sans-serif'],
      },
      colors: {
        card: {
          bg: '#ffffff',
          card: '#ffffff',
          border: '#f3f3f3',
          primary: '#2d2d2d',
          green: '#4ade80',
        }
      },
      boxShadow: {
        'card': '0 1px 2px rgba(0,0,0,0.04), 0 0 0 1px rgba(0,0,0,0.02)',
        'card-hover': '0 4px 12px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.03)',
        'card-drag': '0 15px 30px rgba(0,0,0,0.1), 0 0 0 1px rgba(0,0,0,0.05)',
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
