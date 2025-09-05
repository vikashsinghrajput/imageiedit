/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },},
      colors: {
        main:'#64b142',
        lightmain:"#84a875",
        subMain:'#b74805',
        lightSubMain:"#3e92e5",
        SubTwo:'#0077ed',
      
      
      }
    },
  },
plugins: [require("tailwind-scrollbar-hide")],
}