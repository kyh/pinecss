import "./button.css";

export default {
  title: "Example/Button",
  argTypes: {
    backgroundColor: { control: "color" },
    label: { control: "text" },
    onClick: { action: "onClick" },
    primary: { control: "boolean" },
    size: {
      control: { type: "select" },
      options: ["small", "medium", "large"],
    },
  },
};

const Template = ({
  label,
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  onClick,
}) => {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.innerText = label;
  btn.addEventListener("click", onClick);

  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  btn.className = ["storybook-button", `storybook-button--${size}`, mode].join(
    " "
  );

  btn.style.backgroundColor = backgroundColor;

  return btn;
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

export const Large = Template.bind({});
Large.args = {
  size: "large",
  label: "Button",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  label: "Button",
};
