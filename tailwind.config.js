/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#3b5704',
        'secondary': '#000000',
        'highlightColor': '#64ECC966',
        'eventBorder': '#FFFFFF4D',
        'background': '#edffcc'
      },
      fontFamily: {
        'playfair': ['Playfair Display', 'serif'],
        'sanchez' : ['Sanchez', 'serif'],
        'averia': ['Averia Serif Libre', 'cursive'],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      lg2: "1400px",
      xl: "1600px",
      xl2: "1820px",
    },
  },
  plugins: [],
}
