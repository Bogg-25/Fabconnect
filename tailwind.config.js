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
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7', // Brand Deep Blue
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
            950: '#082f49',
         },
         teal: {
            50: '#f0fdfa',
            100: '#ccfbf1',
            200: '#99f6e4',
            300: '#5eead4',
            400: '#2dd4bf',
            500: '#14b8a6', // Secondary Cyan/Teal
            600: '#0d9488',
            700: '#0f766e',
            800: '#115e59',
            900: '#134e4a',
            950: '#042f2e',
         }
       },
       boxShadow: {
         'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
         'premium': '0 10px 30px -5px rgba(2, 132, 199, 0.08), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
         'glow': '0 0 20px rgba(2, 132, 199, 0.3)',
       },
       fontFamily: {
         sans: ['Inter', 'system-ui', 'sans-serif'],
         display: ['Cal Sans', 'Inter', 'system-ui', 'sans-serif'],
       }
    },
  },
  plugins: [],
}
