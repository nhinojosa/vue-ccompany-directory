/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        p1: '#36144d',
        p2: '#4d2a65',
        p3: '#5a2e7a',
        p4: '#6c3695',
        p5: '#8144b5',
        p6: '#9c63d2',
        p7: '#d3b9ee',
        p8: '#e6d8f6',
        p9: '#f3ecfb',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
