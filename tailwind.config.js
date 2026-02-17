/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        accent: '#d4a574',
        sale: '#e74c3c',
        light: '#f8f8f8',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'bounce-slow': 'bounce 1s ease infinite',
        'pulse-slow': 'pulse 2s infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
