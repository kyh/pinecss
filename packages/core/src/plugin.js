const plugin = require("tailwindcss/plugin");

// utilities
const accessibility = require("./utilities/accessibility");
const loading = require("./utilities/loading");

// layout
const main = require("./layout/main/main");
const nav = require("./layout/nav/nav");
const section = require("./layout/section/section");

// base
const typography = require("./elements/typography/typography");

// components
const article = require("./elements/article/article");
const button = require("./elements/button/button");

const styles = plugin.withOptions((options = { strategy: "base" }) => {
  return ({ addBase }) => {
    const strategy = options.strategy;

    const rules = [
      ...accessibility,
      ...loading,
      ...main,
      ...nav,
      ...section,
      ...typography,
      ...article,
      ...button,
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
