import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-dark': '#264653',
        'primary-light': '#CBF3F0',
        secondary: '#2A9D8F',
        accent: {
          1: '#E9C46A',
          2: '#F4A261',
          3: '#E76F51',
        },
      },
      fontFamily: {
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
