/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
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
      borderRadius: {
        'card': '16px',        // Card containers, modals
        'card-inner': '12px',  // Squircle icons, inner media
        'button': '8px',       // Buttons, toolbar
        'input': '6px',        // Form inputs
        'chip': '4px',         // Small UI elements
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
}
