"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var menu = {
  menu: {
    desktop: {
      "display": "none",
      "> :not([hidden]) ~ :not([hidden])": {
        "--tw-space-x-reverse": 0,
        "marginRight": "calc(2.5rem * var(--tw-space-x-reverse))",
        "marginLeft": "calc(2.5rem * calc(1 - var(--tw-space-x-reverse)))"
      },
      "@media (min-width: 768px)": {
        "display": "flex"
      }
    },
    mobile: {
      "display": "grid",
      "rowGap": "2rem"
    }
  },
  link: {
    base: {
      "fontSize": "1rem",
      "lineHeight": "1.5rem",
      "fontWeight": "500"
    },
    color: {
      "--tw-text-opacity": "1",
      "color": "rgba(107, 114, 128, var(--tw-text-opacity))",
      ":hover": {
        "--tw-text-opacity": "1",
        "color": "rgba(17, 24, 39, var(--tw-text-opacity))"
      }
    }
  }
};
var _default = menu;
exports["default"] = _default;