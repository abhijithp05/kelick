/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  safelist: [
    'justify-center',
    'items-center',
    'w-1/2',
    'w-40',
    'w-44',
    'gap-2',
    'gap-4',
    'rounded-xl',
    'bg-light-gray-400',
    'border-light-gray-200',
    'border-[1px]',
    'px-4',
    'mt-7',
    'text-white',
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
        'light-gray-400': '#F9FCFC',
        'dark-gray': '#2E3333',
        'primary-black': '#1A1A1A',
        'light-teal': '#02B9B0',
      },
    },
  },
  plugins: [],
};
