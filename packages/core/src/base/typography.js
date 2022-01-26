module.exports = [
  {
    base: ["h1", "h2", "h3", "h4", "h5", "h6"],
    class: [".h1", ".h2", ".h3", ".h4", ".h5", ".h6"],
    styles: {
      "@apply text-gray-900 font-bold": "",
    },
  },
  {
    base: ["h1"],
    class: [".h1"],
    styles: {
      "@apply text-2xl mb-6": "",
    },
  },
  {
    base: ["h2"],
    class: [".h2"],
    styles: {
      "@apply text-xl mb-6": "",
    },
  },
  {
    base: ["h3"],
    class: [".h3"],
    styles: {
      "@apply text-lg mb-4": "",
    },
  },
  {
    base: ["h4"],
    class: [".h4"],
    styles: {
      "@apply text-base mb-4": "",
    },
  },
  {
    base: ["h5"],
    class: [".h5"],
    styles: {
      "@apply text-sm mb-2": "",
    },
  },
  {
    base: ["h6"],
    class: [".h6"],
    styles: {
      "@apply text-sm mb-2": "",
    },
  },
  {
    base: ["hgroup"],
    class: [".hgroup"],
    styles: {
      "@apply mb-8": "",
    },
  },
  {
    base: ["hgroup > *"],
    class: [".hgroup > *"],
    styles: {
      "@apply mb-3": "",
    },
  },
  {
    base: ["hgroup > *:last-child"],
    class: [".hgroup > *:last-child"],
    styles: {
      "@apply text-gray-700 text-base font-normal mb-0": "",
    },
  },
  {
    base: [
      "address",
      "blockquote",
      "dl",
      "figure",
      "ol",
      "p",
      "pre",
      "table",
      "ul",
    ],
    class: [
      ".address",
      ".blockquote",
      ".dl",
      ".figure",
      ".ol",
      ".p",
      ".pre",
      ".table",
      ".ul",
    ],
    styles: {
      "@apply text-base mt-0 mb-6": "",
    },
  },
  {
    base: ["blockquote > footer"],
    class: [".blockquote > .footer"],
    styles: {
      "@apply text-gray-500 mt-4": "",
    },
  },
];
