/**
 * @type {import('@remix-run/dev/config').AppConfig}
 */
module.exports = {
  appDirectory: "app",
  assetsBuildDirectory: "public/build",
  publicPath: "/build/",
  serverBuildDirectory: "api/_build",
  ignoredRouteFiles: [".*"],
  mdx: async function () {
    const [rehypeToc, rehypeSlug, rehypeAutolink, rehypeTemplate] =
      await Promise.all([
        import("@jsdevtools/rehype-toc").then((mod) => mod.default),
        import("rehype-slug").then((mod) => mod.default),
        import("rehype-autolink-headings").then((mod) => mod.default),
        import("rehype-template").then((mod) => mod.default),
      ]);

    const className = "prose prose-invert flex-1";
    const template = (node) => rehypeTemplate.html`
      <div className="${className}">${node}</div>
    `;

    return {
      remarkPlugins: [],
      rehypePlugins: [
        rehypeTemplate.template.bind(this, { template }),
        rehypeSlug,
        rehypeAutolink,
        rehypeToc.bind(this, {
          nav: false,
          position: "beforeend",
          cssClasses: {
            toc: "sticky top-5 flex-none self-start max-h-[65vh] overflow-auto md:pl-5",
            link: "block text-sm py-2 text-zinc-400 transition hover:text-zinc-100",
          },
        }),
      ],
    };
  },
};
