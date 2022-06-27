/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    
    "./src/**/*.{html,js,jsx,ts,tsx}", './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
        display: ["group-hover"],
    },
},
  plugins: [require("daisyui", 'tw-elements/dist/plugin')],
}
