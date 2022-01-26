module.exports = [
  {
    base: ["label"],
    class: [".form-label"],
    styles: {
      "@apply block text-sm font-medium text-gray-700": "",
    },
  },
  {
    base: [
      'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="button"]):not([type="submit"]):not([type="reset"])',
    ],
    class: [
      '.form-input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="button"]):not([type="submit"]):not([type="reset"])',
    ],
    styles: {
      "@apply focus:ring-gray-500 focus:border-gray-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md":
        "",
    },
  },
  {
    base: ["label + input + small"],
    class: [".form-feedback"],
    styles: {
      "@apply mt-2 block text-sm text-gray-500": "",
    },
  },
  {
    base: ["label + input"],
    class: [".form-label + .form-input"],
    styles: {
      "@apply mt-1": "",
    },
  },
  {
    base: ["input + small + label", "input + label"],
    class: [
      ".form-input + .form-feedback + .form-label",
      ".form-input + .form-label",
    ],
    styles: {
      "@apply mt-5": "",
    },
  },
  {
    base: ["form button:last-child"],
    class: [".form .form-button:last-child"],
    styles: {
      "@apply mt-6": "",
    },
  },
  {
    base: ["form > footer"],
    class: [".form-footer"],
    styles: {
      "@apply flex justify-end mt-4": "",
    },
  },
  {
    base: ["form > footer > button:last-child"],
    class: [".form-footer > .form-button:last-child"],
    styles: {
      "@apply mt-0": "",
    },
  },
  {
    base: ["form > footer > button"],
    class: [".form-footer > .form-button"],
    styles: {
      "@apply ml-3": "",
    },
  },
];
