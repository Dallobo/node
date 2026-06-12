import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        ocean: {
          50:  '#e0f4fb',
          100: '#b3e4f5',
          200: '#7dd2ee',
          300: '#44bfe7',
          400: '#0fb2e3',
          500: '#0096C7',  // ocean blue principal
          600: '#007aab',
          700: '#005f8a',
          800: '#00456a',
          900: '#002c4a',
        },
        fluo: {
          300: '#69ffb8',
          400: '#33ffaa',
          500: '#00E676',  // vert fluo principal
          600: '#00c463',
          700: '#009e4f',
        },
        navy: {
          700: '#0D3B66',  // texte sur fond blanc
          800: '#082d52',
          900: '#041e38',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
