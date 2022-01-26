module.exports = [
  {
    base: ["table"],
    class: [".table"],
    styles: {
      "@apply min-w-full divide-y divide-gray-200": "",
    },
  },
  {
    base: ["thead"],
    class: [".thead", ".table thead"],
    styles: {
      "@apply bg-gray-50": "",
    },
  },
  {
    base: ["th"],
    class: [".th", ".table th"],
    styles: {
      "@apply px-6 py-3 text-left text-xs font-medium text-gray-500": "",
    },
  },
  {
    base: ["tbody"],
    class: [".table tbody"],
    styles: {
      "@apply divide-y divide-gray-200": "",
    },
  },
  {
    base: ["td"],
    class: [".table td"],
    styles: {
      "@apply px-6 py-3 whitespace-nowrap text-sm text-gray-500": "",
    },
  },
  {
    base: ["td:last-child"],
    class: [".table td:last-child"],
    styles: {
      "@apply text-right": "",
    },
  },
  {
    base: ['table[role="grid"] tbody tr:nth-child(odd)'],
    class: [".table-striped tbody tr:nth-child(odd)"],
    styles: {
      "@apply bg-gray-100": "",
    },
  },
];
