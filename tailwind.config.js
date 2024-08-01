/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        "dark-grey": {
          100: "#424242",
          200: "#2C2A2A",
          300: "#3C3C3C",
          400: "#414141",
          500: "#373737",
        },
        black: {
          DEFAULT: "#000000",
          100: "#252525",
          200: "#202020",
          300: "#131313",
        },
        white: {
          DEFAULT: "#FFFFFF",
          200: "#EDEDED",
          300: "#F2F2F2",
          400: "#FAFAFA",
        },
        yellow: {
          100: "#F9ED32",
          200: "#FFF225",
        },
      },
    },
  },
  plugins: [],
};
