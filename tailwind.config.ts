import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        graphite: '#1C1C1E',
        furnace: '#141414',
        cream: '#F5F0E8',
        amber: {
          DEFAULT: '#F0A500',
          dim: 'rgba(240, 165, 0, 0.15)',
        },
        steel: '#555555',
        border: '#2A2A2C',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'sans-serif'],
        body: ['var(--font-instrument)', 'sans-serif'],
        mono: ['var(--font-ibmplex)', 'monospace'],
      },
      fontSize: {
        'hero': ['clamp(80px, 10vw, 132px)', { lineHeight: '0.92', letterSpacing: '0.02em' }],
        'section': ['clamp(40px, 5vw, 56px)', { lineHeight: '0.95', letterSpacing: '0.04em' }],
        'card': ['clamp(18px, 2vw, 28px)', { lineHeight: '1.1', letterSpacing: '0.04em' }],
        'label': ['11px', { lineHeight: '1', letterSpacing: '0.2em' }],
      },
      spacing: {
        'section': '128px',
        'section-sm': '80px',
        'container-x': '48px',
      },
      maxWidth: {
        'container': '1440px',
      },
      borderRadius: {
        DEFAULT: '0px',
        'sm': '2px',
      },
      transitionTimingFunction: {
        'expo-out': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      keyframes: {
        'line-extend': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        'loading-bar': {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(200%)' },
        },
      },
      animation: {
        'line-extend': 'line-extend 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee-left 40s linear infinite',
        'marquee-fast': 'marquee-left 25s linear infinite',
        'marquee-reverse': 'marquee-right 25s linear infinite',
        'loading-bar': 'loading-bar 1.2s ease-in-out infinite',
        'neon-pulse': 'neon-pulse 2.4s ease-in-out infinite',
        'dot-pulse': 'dot-pulse 1.6s ease-in-out infinite',
        'sway': 'sway 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
