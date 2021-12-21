import "./article.css";

export default {
  title: "Example/Article",
  argTypes: {
    label: { control: "text" },
  },
};

const Template = ({ label }) => {
  const article = document.createElement("article");

  article.innerText = label;

  return article;
};

export const Card = Template.bind({});
Card.args = {
  label: "Lorem ipsum",
};
