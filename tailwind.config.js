/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#E63366",
      },
      fontFamily: {
        sans: ["Avenir, 'Lato', Helvetica Neue, Helvetica, Arial, sans-serif"],
        serif: ["'Source Serif Pro', ui-serif, serif"],
      },
      fontSize: {
        mega: [
          "7rem",
          {
            lineHeight: "10rem",
          },
        ],
      },
    },
  },
  plugins: [],
};
