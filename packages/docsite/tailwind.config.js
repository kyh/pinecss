module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}", "./config/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
