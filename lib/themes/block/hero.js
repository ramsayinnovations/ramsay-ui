"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var hero = {
  "default": {
    base: {
      "marginTop": "4rem",
      "marginLeft": "auto",
      "marginRight": "auto",
      "maxWidth": "80rem",
      "paddingLeft": "1rem",
      "paddingRight": "1rem",
      "@media (min-width: 640px)": {
        "marginTop": "6rem",
        "paddingLeft": "1.5rem",
        "paddingRight": "1.5rem"
      },
      "@media (min-width: 1024px)": {
        "marginTop": "8rem"
      }
    },
    grid: {
      "@media (min-width: 1024px)": {
        "display": "grid",
        "gridTemplateColumns": "repeat(12, minmax(0, 1fr))",
        "gap": "2rem"
      }
    }
  },
  leftBlock: {
    "default": {
      base: {
        "@media (min-width: 640px)": {
          "textAlign": "center"
        },
        "@media (min-width: 768px)": {
          "maxWidth": "42rem",
          "marginLeft": "auto",
          "marginRight": "auto"
        },
        "@media (min-width: 1024px)": {
          "gridColumn": "span 6 / span 6",
          "textAlign": "left"
        }
      }
    }
  },
  rightBlock: {
    "default": {
      base: {
        "marginTop": "3rem",
        "position": "relative",
        "@media (min-width: 640px)": {
          "maxWidth": "32rem",
          "marginLeft": "auto",
          "marginRight": "auto"
        },
        "@media (min-width: 1024px)": {
          "marginTop": "0px",
          "maxWidth": "none",
          "marginLeft": "0px",
          "marginRight": "0px",
          "gridColumn": "span 6 / span 6",
          "display": "flex",
          "alignItems": "center"
        }
      }
    }
  }
};
var _default = hero;
exports["default"] = _default;