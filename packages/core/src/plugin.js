const plugin = require("tailwindcss/plugin");

const styles = plugin.withOptions((options = { strategy: "base" }) => {
  return ({ addBase }) => {
    const strategy = options.strategy;

    const rules = [
      // base
      ...require("./base/accessibility"),
      ...require("./base/loading"),
      ...require("./base/typography"),
      // layout
      ...require("./layout/main/main"),
      ...require("./layout/nav/nav"),
      ...require("./layout/section/section"),
      ...require("./layout/figure/figure"),
      // components
      ...require("./components/card/card"),
      ...require("./components/button/button"),
      ...require("./components/dialog/dialog"),
      ...require("./components/table/table"),
      ...require("./components/form/form"),
    ];

    const finalRules = rules
      .map((rule) => {
        if (rule[strategy] === null) return null;
        return { [rule[strategy]]: rule.styles };
      })
      .filter(Boolean);

    addBase(finalRules);
  };
});

module.exports = styles;
