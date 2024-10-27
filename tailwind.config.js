/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
        nunito: ["Nunito", "sans-serif"],
        bubblegum: ['"Bubblegum Sans"', "cursive"],
      },
      dropShadow: {
        custom: "0px 4.8px 24.4px rgba(19, 16, 34, 0.10)",
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      translate: ["group-two-hover"],
    },
  },
};
