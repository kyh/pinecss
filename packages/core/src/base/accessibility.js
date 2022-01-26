module.exports = [
  {
    base: ["[aria-controls]"],
    class: ["[aria-controls]"],
    styles: {
      "@apply cursor-pointer": "",
    },
  },
  {
    base: ['[aria-disabled="true"]', "[disabled]"],
    class: ['[aria-disabled="true"]', "[disabled]"],
    styles: {
      "@apply cursor-not-allowed": "",
    },
  },
];
