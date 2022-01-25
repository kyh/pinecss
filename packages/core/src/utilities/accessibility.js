module.exports = [
  {
    base: ["[aria-controls]"],
    class: ["[aria-controls]"],
    style: {
      "@apply cursor-pointer": "",
    },
  },
  {
    base: ['[aria-disabled="true"]', "[disabled]"],
    class: ['[aria-disabled="true"]', "[disabled]"],
    style: {
      "@apply cursor-not-allowed": "",
    },
  },
];
