export const All = () => {
  const containerStyles = {
    display: "flex",
    gap: "1rem",
    marginBottom: "1rem",
  };

  return (
    <>
      <div style={containerStyles}>
        <button>Primary</button>
        <button className="secondary">Secondary</button>
      </div>
      <div style={containerStyles}>
        <button className="outline">Primary outline</button>
        <button className="outline secondary">Secondary outline</button>
      </div>
      <div style={containerStyles}>
        <a role="button">Link Button</a>
      </div>
    </>
  );
};

export default {
  title: "Elements/Buttons",
};
