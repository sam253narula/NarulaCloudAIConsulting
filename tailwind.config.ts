import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './lib/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Inter Tight', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      colors: {
        ink: '#080808',
        paper: '#f3f0e9',
        acid: '#d9ff3f',
        mist: '#c8c8c8'
      },
      boxShadow: {
        glow: '0 0 80px rgba(217, 255, 63, 0.18)',
        acid: '0 0 42px rgba(217, 255, 63, 0.26)',
        soft: '0 20px 80px rgba(0, 0, 0, 0.22)'
      },
      backgroundImage: {
        radialGrid: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)'
      }
    }
  },
  plugins: []
};

export default config;
