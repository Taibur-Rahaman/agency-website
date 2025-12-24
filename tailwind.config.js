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
        neon: {
          cyan: '#00d9ff',
          purple: '#9333ea',
          pink: '#d946ef',
          blue: '#3b82f6',
          green: '#10b981',
          orange: '#f97316',
        },
        brand: {
          primary: '#00d9ff',
          secondary: '#9333ea',
          accent: '#d946ef',
        },
        dark: {
          bg: '#0a0a0a',
          card: '#151515',
          border: '#1f1f1f',
          text: '#e5e5e5',
        }
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-border': 'glow-border 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        glow: {
          '0%': { 
            boxShadow: '0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff',
            textShadow: '0 0 5px #00ffff, 0 0 10px #00ffff'
          },
          '100%': { 
            boxShadow: '0 0 10px #a855f7, 0 0 20px #a855f7, 0 0 30px #a855f7, 0 0 40px #a855f7',
            textShadow: '0 0 10px #a855f7, 0 0 20px #a855f7'
          },
        },
        'glow-border': {
          '0%, 100%': { 
            borderColor: '#00ffff',
            boxShadow: '0 0 10px #00ffff, inset 0 0 10px #00ffff'
          },
          '50%': { 
            borderColor: '#a855f7',
            boxShadow: '0 0 20px #a855f7, inset 0 0 20px #a855f7'
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'pulse-glow': {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
    },
  },
  plugins: [],
}

