import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0E1620',
          800: '#17202A',
        },
        ink: {
          700: '#2E3942',
        },
        teal: {
          900: '#034F50',
          700: '#067F81',
          500: '#079A9C',
          300: '#4DBDBE',
          100: '#E0F4F4',
        },
        brandblue: {
          900: '#002A80',
          700: '#0048CC',
          500: '#005CFE',
          300: '#5C8EFF',
          100: '#DDE7FF',
        },
        slate: {
          500: '#5C6975',
          300: '#A5AFB8',
          200: '#CED4DA',
          100: '#EEF1F4',
        },
        paper: '#FFFFFF',
        tint: '#F4F6F8',
        success: '#0FA968',
        warning: '#E0A100',
        danger: '#D6443C',
      },
      fontFamily: {
        display: ['Manrope', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
        body: ['Inter', 'Segoe UI', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Cascadia Mono', 'Consolas', 'Courier New', 'monospace'],
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '4rem', letterSpacing: '-0.01em', fontWeight: '700' }],
        h1: ['2.5rem', { lineHeight: '3rem', letterSpacing: '-0.01em', fontWeight: '700' }],
        h2: ['2rem', { lineHeight: '2.5rem', letterSpacing: '-0.01em', fontWeight: '600' }],
        h3: ['1.5rem', { lineHeight: '2rem', fontWeight: '600' }],
        h4: ['1.125rem', { lineHeight: '1.625rem', fontWeight: '600' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75rem' }],
        body: ['1rem', { lineHeight: '1.5rem' }],
        'body-sm': ['0.875rem', { lineHeight: '1.25rem' }],
        caption: ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.04em', fontWeight: '500' }],
      },
      maxWidth: {
        container: '1200px',
      },
    },
  },
  plugins: [],
};

export default config;
