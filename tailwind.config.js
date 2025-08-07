/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FF1493', // Pink
        secondary: '#8A2BE2', // Purple
        dark: '#0A0A0A',
        'dark-gray': '#1A1A1A',
        'light-gray': '#2A2A2A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(255, 20, 147, 0.5)' },
          '100%': { boxShadow: '0 0 30px rgba(255, 20, 147, 0.8)' },
        },
      },
    },
  },
  plugins: [],
} 