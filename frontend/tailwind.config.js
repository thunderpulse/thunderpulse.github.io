/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#f0f4ff',
          100: '#dde6ff',
          200: '#c3d1ff',
          300: '#9db4ff',
          400: '#748bff',
          500: '#5062f5',
          600: '#3d47e8',
          700: '#3237cb',
          800: '#2a30a4',
          900: '#272d82',
        },
        accent: {
          400: '#a78bfa',
          500: '#8b5cf6',
          600: '#7c3aed',
        },
        dark: {
          900: '#06070c',
          800: '#0d0e1a',
          700: '#11132a',
          600: '#161836',
          500: '#1e2040',
        }
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease both',
        'fade-in': 'fadeIn 0.8s ease both',
        'slide-down': 'slideDown 0.4s ease both',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      }
    },
  },
  plugins: [],
}
