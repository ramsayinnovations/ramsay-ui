module.exports = {
  presets: [
    [
      "next/babel",
      {
        "preset-react": {
          runtime: "automatic",
          importSource: "@emotion/react",
        },
      },
    ],
  ],
  plugins: [
    "@emotion/babel-plugin",
    "babel-plugin-macros",
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".jsx", ".js", ".json"],
        alias: {
          "@/components": "./src/components",
          "@/themes": "./src/themes",
          "@/assets": "./src/assets",
        },
      },
    ],
  ],
  ignore: ["node_modules"],
};
