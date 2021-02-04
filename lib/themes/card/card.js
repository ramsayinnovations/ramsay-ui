"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var card = {
  "default": {
    base: {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
      "overflow": "hidden",
      "--tw-shadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
      "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
      "borderRadius": "0.5rem"
    },
    divide: {
      "> :not([hidden]) ~ :not([hidden])": {
        "--tw-divide-y-reverse": 0,
        "borderTopWidth": "calc(1px * calc(1 - var(--tw-divide-y-reverse)))",
        "borderBottomWidth": "calc(1px * var(--tw-divide-y-reverse))",
        "--tw-divide-opacity": "1",
        "borderColor": "rgba(229, 231, 235, var(--tw-divide-opacity))"
      }
    },
    item: {
      "paddingLeft": "1rem",
      "paddingRight": "1rem",
      "paddingTop": "1.25rem",
      "paddingBottom": "1.25rem",
      "@media (min-width: 640px)": {
        "padding": "1.5rem"
      }
    }
  }
};
var _default = card;
exports["default"] = _default;