const css = `
  .h-stack {
    display: flex;
    gap: 1rem;
  }

  .v-stack {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

export const All = () => {
  return (
    <>
      <style>{css}</style>
      <section className="v-stack">
        <div className="h-stack">
          <button>Primary</button>
          <button className="secondary">Secondary</button>
        </div>
        <div className="h-stack">
          <a role="button">Link Button</a>
          <a role="button" className="secondary">
            Secondary Link Button
          </a>
        </div>
        <div className="h-stack">
          <button disabled aria-busy="true">
            Loading Button
          </button>
        </div>
        <div className="h-stack">
          <button disabled>Disabled Button</button>
        </div>
      </section>
    </>
  );
};

export default {
  title: "Elements/Buttons",
};
