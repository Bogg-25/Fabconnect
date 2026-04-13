/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
         primary: {
            DEFAULT: '#FF3B30',
            hover:   '#E0342A',
            50:  '#fff1f0',
            100: '#ffe0de',
            200: '#ffc5c2',
            300: '#ff9c97',
            400: '#ff6b63',
            500: '#FF3B30',
            600: '#E0342A',
            700: '#c01f15',
            800: '#9e1d15',
            900: '#831e17',
            950: '#480a07',
         },
         secondary: {
            DEFAULT: '#1E6FA8',
            hover:   '#185D8E',
            50:  '#f0f7ff',
            100: '#e0effe',
            200: '#b9dffd',
            300: '#7cc4fb',
            400: '#36a4f6',
            500: '#1E6FA8',
            600: '#185D8E',
            700: '#154e78',
            800: '#154164',
            900: '#173655',
            950: '#0f2238',
         },
         accent: {
            DEFAULT: '#1F7A5C',
            hover:   '#196649',
            50:  '#f0fdf7',
            100: '#dcfbee',
            200: '#bbf5dc',
            300: '#86ebbf',
            400: '#4cd99b',
            500: '#1F7A5C',
            600: '#196649',
            700: '#17583f',
            800: '#174635',
            900: '#143a2d',
            950: '#0a2119',
         },
       },
       boxShadow: {
         'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
         'premium': '0 10px 30px -5px rgba(255, 59, 48, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
         'glow': '0 0 20px rgba(255, 59, 48, 0.3)',
       },
       fontFamily: {
         sans: ['Inter', 'system-ui', 'sans-serif'],
         display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
       }
    },
  },
  plugins: [],
}
