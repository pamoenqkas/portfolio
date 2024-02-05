const { nextui } = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/preline/dist/*.js',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        grotesque: ['Darker Grotesque'],
      }
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
    }),
    require('preline/plugin'),
  ],
}