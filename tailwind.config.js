/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './contexts/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
    './App.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '1rem' }], // 10px
        '3xs': ['0.5rem', { lineHeight: '0.75rem' }], // 8px
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
        'card': '24px',        // Card containers, modals (was 16px)
        'card-inner': '12px',  // Squircle icons, inner media
        'card-sm': '10px',     // Small cards/elements
        'button': '4px',       // Buttons, toolbar (was 8px)
        'input': '4px',        // Form inputs (was 6px)
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
