import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C8A951',
          light: '#E2C87A',
          dark: '#8B7030',
        },
      },
    },
  },
  plugins: [],
};

export default config;
