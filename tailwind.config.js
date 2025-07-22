/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f4f8',
          100: '#d9e2ec',
          200: '#bcccdc',
          300: '#9fb3c8',
          400: '#829ab1',
          500: '#627d98',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#0B1F3F',
        },
        gray: {
          50: '#f7f9fc',
          100: '#ecf1f6',
          200: '#d9e2ec',
          300: '#c5d2dc',
          400: '#9fb3c8',
          500: '#5E6A7D',
          600: '#486581',
          700: '#334e68',
          800: '#243b53',
          900: '#102a43',
        },
        success: '#1FAD66',
        error: '#D64545',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '7xl': '1140px',
      },
    },
  },
  plugins: [],
}