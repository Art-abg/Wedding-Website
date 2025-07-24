import type { Config } from 'tailwindcss';


const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // Extra small screen breakpoint
      },
      colors: {
        cream: {
          100: '#FDFBF6',
          200: '#FBF5EB',
        },
        green: {
          100: '#EBF5EE',
          700: '#4A7C59',
          800: '#3A6B4B',
          900: '#2B573A',
        },
        blush: {
          300: '#FADADD',
          500: '#F7C0C7',
        },
        berry: {
          500: '#9B2C2C',
          600: '#8C2323',
          700: '#7A1D1D',
        },
        gold: {
          500: '#D4AF37', // Existing gold
          600: '#C69F2E', // Darker Gold
          champagne: '#F1E5AC', // Champagne Gold
        },
        forest: {
          DEFAULT: '#2E5339', // Forest Green (can be used as text-forest)
          light: '#4A7C59' // Lighter Forest Green (your current green-700)
        },
        sage: {
          light: '#D0D8C8', // Pale Sage Green
          DEFAULT: '#A9B4A0' // Medium Sage Green
        },
        rose: {
          dusty: '#C8A1A7', // Dusty Rose
          DEFAULT: '#FADADD' // Your current blush-300
        },
        lavender: {
          muted: '#B2A2C0' // Muted Lavender
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
        parisienne: ['var(--font-parisienne)', 'cursive'],
        cormorant: ['var(--font-cormorant)', 'serif'], // Assuming you have this font variable
        'dancing-script': ['var(--font-dancing-script)', 'cursive'],
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;
