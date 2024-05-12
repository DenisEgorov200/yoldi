/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          100: 'var(--gray-100)',
          200: 'var(--gray-200)',
          300: 'var(--gray-300)',
          400: 'var(--gray-400)',
        },
        red: 'var(--red)',
      },
      fontSize: {
        title: ['1.875rem', {
          lineHeight: '140%'
        }],
        subtitle: ['1.125rem', {
          lineHeight: '140%'
        }],
        paragraph: ['1rem', {
          lineHeight: '160%'
        }],
        button: ['1rem', {
          lineHeight: '160%'
        }],
        'paragraph-mini': ['0.75rem', {
          lineHeight: '160%'
        }],
      }
    },
  },
  plugins: [],
}