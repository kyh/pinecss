module.exports = [
  {
    base: ['[aria-busy="true"]'],
    class: ['[aria-busy="true"]'],
    style: {
      "@apply cursor-progress": "",
    },
  },
  {
    base: ['[aria-busy="true"]:not(input):not(select):not(textarea)'],
    class: ['[aria-busy="true"]:not(input):not(select):not(textarea)'],
    style: {
      "::before": {
        "@apply inline-flex w-4 h-4 animate-spin": "",
        border: "0.15rem solid currentColor",
        borderRadius: "1rem",
        borderRightColor: "transparent",
        content: "",
      },
      ":not(:empty)": {
        "&::before": {
          "@apply mr-2": "",
        },
      },
      ":empty": {
        "@apply text-center": "",
      },
    },
  },
  {
    base: [
      'button[aria-busy="true"]',
      'input[type="submit"][aria-busy="true"]',
      'input[type="button"][aria-busy="true"]',
      'input[type="reset"][aria-busy="true"]',
      'a[aria-busy="true"]',
    ],
    class: [
      'button[aria-busy="true"]',
      'input[type="submit"][aria-busy="true"]',
      'input[type="button"][aria-busy="true"]',
      'input[type="reset"][aria-busy="true"]',
      'a[aria-busy="true"]',
    ],
    style: {
      "@apply pointer-events-none": "",
    },
  },
];
