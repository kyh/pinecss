module.exports = [
  {
    base: ["article"],
    class: [".card"],
    styles: {
      "@apply sm:rounded-md sm:shadow overflow-hidden": "",
    },
  },
  {
    base: ["article > header", "article > header + *", "article > footer"],
    class: [".card-header", ".card-body", ".card-footer"],
    styles: {
      "@apply px-5": "",
    },
  },
  {
    base: ["article > header"],
    class: [".card-header"],
    styles: {
      "@apply pt-4": "",
    },
  },
  {
    base: ["article > footer"],
    class: [".card-footer"],
    styles: {
      "@apply pb-4": "",
    },
  },
];
