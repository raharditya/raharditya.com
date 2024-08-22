import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: '#264653',
          light: '#E9ECEF',
        },
        body: {
          dark: '#264653BF',
          light: '#E9ECEFBF',
        },
        card: {
          white: '#E9F8F2',
          border: '#2A9D8F',
        },
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
