import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-syne)'],
        mono: ['var(--font-lato)'],
      },
      colors: {
        secondary: '#D3EAFF',
        'header-bg': 'rgba(30, 30, 30, 0.48)',
        'white-secondary': '#ECECEC',
        'dark-secondary': '#1E1E1E',
        'blue-secondary' : '#556B84'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
