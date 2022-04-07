module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      keyframes: {
        hue: {
          '0%, 100%': { filter: 'hue-rotate(0deg)' },
          '50%': { filter: 'hue-rotate(180deg)' },
        }
      },
      animation: {
        hue: 'hue 1s ease-in-out infinite',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
