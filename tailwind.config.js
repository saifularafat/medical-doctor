/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-color': '#07332F',
        'title-color': '#0A0808',
        'subTitle-color': '#3B3A3A',
        'description-color': '#6C6B6B',
        'button-color': '#F7A582',
      },

    },
  },
  plugins: [require("daisyui")],
}

