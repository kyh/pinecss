module.exports = [
  {
    base: ["dialog"],
    class: [".dialog"],
    styles: {
      "@apply block left-0 top-0 absolute w-fit h-fit bg-white mx-auto  before:fixed before:block before:inset-0 before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-gray-500 before:bg-opacity-75 before:animate-[fadeIn_0.3s_ease-out]":
        "",
    },
  },
  {
    base: ["dialog > *"],
    class: [".dialog-content"],
    styles: {
      "@apply relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl animate-[fadeInScale_0.3s_ease-out] sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6":
        "",
      minWidth: "400px",
    },
  },
  {
    base: [
      "dialog > * > header *",
      "dialog > * > header + *",
      "dialog > * > footer *",
    ],
    class: [
      ".dialog-header",
      ".dialog-header *",
      ".dialog-body",
      ".dialog-body *",
      ".dialog-footer",
      ".dialog-footer *",
    ],
    styles: {
      "@apply m-0": "",
    },
  },
  {
    base: ["dialog > * > header + *"],
    class: [".dialog-body"],
    styles: {
      "@apply mt-2": "",
    },
  },
  {
    base: ["dialog > * > footer"],
    class: [".dialog-footer"],
    styles: {
      "@apply mt-4": "",
    },
  },
  {
    base: ["dialog:not([open])"],
    class: [".dialog:not([open])"],
    styles: {
      "@apply hidden": "",
    },
  },
];
