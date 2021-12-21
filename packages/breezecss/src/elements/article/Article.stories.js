export default {
  title: "Elements/Article",
  argTypes: {
    label: { control: "text" },
  },
};

const Template = ({ label, card }) => {
  if (card) {
    return `
    <section>
      <article>
        <header><h1>This is a card</h1></header>
        <p>${label}</p>
        <footer>Card footer</footer>
      </article>
    </section>
  `;
  }

  return `
    <section>
      <article>${label}</article>
    </section>
  `;
};

export const Basic = Template.bind({});
Basic.args = {
  label: "Lorem ipsum",
};

export const Card = Template.bind({});
Card.args = {
  label: "Lorem ipsum",
  card: true,
};
