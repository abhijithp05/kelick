/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        quicksand: ['Quicksand', 'sans-serif'], // Add Quicksand font here
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'light-gray': '#7A8484',
        'light-gray-100': '#F2F5F5',
        'light-gray-200': '#B3BEBE',
        'light-gray-300': '#5F6969',
        'dark-gray': '#2E3333',
        'light-teal': '#02B9B0',
      },
    },
  },
  plugins: [],
};
