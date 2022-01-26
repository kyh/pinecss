module.exports = [
  {
    base: [
      "button",
      'button[type="button"]',
      'button[type="reset"]',
      'button[type="submit"]',
      'input[type="submit"]',
      'input[type="button"]',
      'input[type="reset"]',
      'a[role="button"]',
    ],
    class: [".button"],
    styles: {
      "@apply no-underline inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2  focus:ring-gray-500 transition-all duration-150":
        "",
    },
  },
  {
    base: [
      "button[disabled]",
      'button[type="button"][disabled]',
      'button[type="reset"][disabled]',
      'button[type="submit"][disabled]',
      'input[type="submit"][disabled]',
      'input[type="button"][disabled]',
      'input[type="reset"][disabled]',
      'a[role="button"][disabled]',
    ],
    class: [".button[disabled]"],
    styles: {
      "@apply cursor-not-allowed bg-gray-400 hover:bg-gray-400": "",
    },
  },
  {
    base: [
      "button.secondary",
      'button[type="button"].secondary',
      'button[type="reset"].secondary',
      'button[type="submit"].secondary',
      'input[type="submit"].secondary',
      'input[type="button"].secondary',
      'input[type="reset"].secondary',
      'a[role="button"].secondary',
    ],
    class: [".button.button-secondary"],
    styles: {
      "@apply border-gray-300 text-gray-700 bg-white hover:bg-gray-50": "",
    },
  },
];
