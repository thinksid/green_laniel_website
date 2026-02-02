import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary - Brunswick Green (#1D4C3C)
        brunswick: {
          DEFAULT: '#1D4C3C',
          900: '#0E261E',
          800: '#153829',
          700: '#1D4C3C',
          600: '#256050',
          500: '#2E7464',
          400: '#4A9584',
          300: '#7BB5A8',
          200: '#ADCFC6',
          100: '#DEE9E5',
          50: '#EFF4F2',
        },
        // Secondary - Midnight Green (#0A383E)
        midnight: {
          DEFAULT: '#0A383E',
          900: '#051C1F',
          800: '#0A383E',
          700: '#0F545D',
          600: '#14707C',
          500: '#198C9B',
          400: '#3DABB9',
          300: '#75C5CF',
          200: '#ADDFE5',
          100: '#E0F3F5',
          50: '#F0F9FA',
        },
        // Highlight 1 - Asparagus (#80AA56)
        asparagus: {
          DEFAULT: '#80AA56',
          900: '#3D5129',
          800: '#526D37',
          700: '#688945',
          600: '#80AA56',
          500: '#96BB72',
          400: '#ABCB8F',
          300: '#C1DBAB',
          200: '#D6EBC7',
          100: '#EBFAE3',
          50: '#F5FCF1',
        },
        // Highlight 2 - Sage (#C7D393)
        sage: {
          DEFAULT: '#C7D393',
          900: '#5E6442',
          800: '#7E8759',
          700: '#9EAA70',
          600: '#B3C181',
          500: '#C7D393',
          400: '#D4DEA9',
          300: '#E1E9BF',
          200: '#EEF3D5',
          100: '#F9FBEB',
          50: '#FCFDF5',
        },
        // Background - Beige (#F8F7F2)
        beige: {
          DEFAULT: '#F8F7F2',
          900: '#8C8A7D',
          800: '#A8A597',
          700: '#C4C1B1',
          600: '#DCD9CB',
          500: '#F0EDE4',
          400: '#F4F3EC',
          300: '#F8F7F2',
          200: '#FAFAF7',
          100: '#FCFCFB',
          50: '#FEFEFE',
        },
        // Legacy aliases for gradual migration
        forest: {
          900: '#0E261E',
          800: '#153829',
          700: '#1D4C3C',
          600: '#256050',
          500: '#2E7464',
          400: '#4A9584',
          300: '#7BB5A8',
          200: '#ADCFC6',
          100: '#DEE9E5',
        },
        // Accent - Warm Earth (keep for compatibility)
        earth: {
          600: '#9C6644',
          500: '#B07D56',
          400: '#C49A6C',
        },
        // Background colors (legacy aliases)
        cream: '#F8F7F2',
        warmgray: '#F0EDE4',
      },
      fontFamily: {
        display: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        body: ['var(--font-poppins)', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'display-xl': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display-lg': ['3.5rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'display-md': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['1.875rem', { lineHeight: '1.25' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
