export default {
  title: "Elements/Button",
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    style: {
      control: { type: "select" },
      options: ["default", "secondary", "large"],
    },
  },
};

const Template = ({ primary = false, backgroundColor, label }) => {
  document.body.style.backgroundColor = backgroundColor;
  // const btn = document.createElement("button");
  // btn.type = "button";
  // btn.innerText = label;

  // const mode = primary ? "primary" : "secondary";
  // btn.className = [mode].join(" ");

  return `<button>${label}</button>`;
};

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "Button",
};
