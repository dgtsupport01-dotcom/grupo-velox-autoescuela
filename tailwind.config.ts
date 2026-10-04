import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        accent: '#f59e0b',
        soft: '#f8fafc',
        brand: '#0ea5e9'
      },
      boxShadow: {
        soft: '0 25px 50px -12px rgba(15, 23, 42, 0.15)'
      }
    }
  },
  plugins: []
};

export default config;
