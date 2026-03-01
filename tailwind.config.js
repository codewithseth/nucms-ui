/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        'xs': { 'max': '639px' },
      },
      fontFamily: {
        body: ['Kantumruy Pro', 'sans-serif'],
      },
      colors: {
        'primary': "#148ECE",
      },
      maxWidth: {
        'xxs': '12rem',
        'xxxl': '40rem',
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
    require('postcss-import'),
    require('tailwindcss/nesting'),
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}

