module.exports = {
  semi: true,
  singleQuote: false,
  trailingComma: "all",
  printWidth: 100,
  useTabs: false,
  plugins: [require("prettier-plugin-tailwindcss")],
  tailwindConfig: "./tailwind.config.js",
};
