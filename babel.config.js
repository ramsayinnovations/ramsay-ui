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
        alias: {
          "@/components/*": "./components/*",
          "@/themes/*": "./themes/*",
        },
      },
    ],
  ],
  ignore: ["node_modules"],
};
