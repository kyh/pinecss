module.exports = [
  {
    base: ['[aria-busy="true"]'],
    class: ['[aria-busy="true"]', ".loading"],
    styles: {
      "@apply cursor-progress": "",
    },
  },
  {
    base: ['[aria-busy="true"]:not(input):not(select):not(textarea)'],
    class: [
      '[aria-busy="true"]:not(input):not(select):not(textarea)',
      ".loading",
    ],
    styles: {
      "@apply relative text-white/0 before:block before:animate-spin before:absolute before:inline-block before:w-4 before:h-4 before:border-b before:border-l before:border-r before:border-gray-900 before:rounded-full before:left-[50%] before:-ml-2":
        "",
    },
  },
];
