module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}", "./remix.config.js"],
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
