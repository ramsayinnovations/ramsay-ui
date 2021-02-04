"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var fullCol = {
  "gridColumn": "span 6 / span 6"
};
var halfCol = {
  "gridColumn": "span 6 / span 6",
  "@media (min-width: 640px)": {
    "gridColumn": "span 3 / span 3"
  }
};
var thirdCol = {
  "gridColumn": "span 6 / span 6",
  "@media (min-width: 640px)": {
    "gridColumn": "span 3 / span 3"
  },
  "@media (min-width: 1024px)": {
    "gridColumn": "span 2 / span 2"
  }
};
var twoThirdsCol = {
  "gridColumn": "span 6 / span 6",
  "@media (min-width: 640px)": {
    "gridColumn": "span 4 / span 4"
  }
};
var input = {
  base: {
    "display": "block",
    "width": "100%",
    "--tw-shadow": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
  },
  border: {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(209, 213, 219, var(--tw-border-opacity))",
    "borderRadius": "0.375rem"
  },
  size: {
    "@media (min-width: 640px)": {
      "fontSize": "0.875rem",
      "lineHeight": "1.25rem"
    }
  },
  space: {
    "> :not([hidden]) ~ :not([hidden])": {
      "--tw-space-y-reverse": 0,
      "marginTop": "calc(0.25rem * calc(1 - var(--tw-space-y-reverse)))",
      "marginBottom": "calc(0.25rem * var(--tw-space-y-reverse))"
    }
  },
  focus: {
    ":focus": {
      "--tw-ring-opacity": "1",
      "--tw-ring-color": "rgba(59, 130, 246, var(--tw-ring-opacity))",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(59, 130, 246, var(--tw-border-opacity))"
    }
  },
  error: {
    "--tw-border-opacity": "1",
    "borderColor": "rgba(252, 165, 165, var(--tw-border-opacity))",
    ":focus": {
      "outline": "2px solid transparent",
      "outlineOffset": "2px",
      "--tw-ring-opacity": "1",
      "--tw-ring-color": "rgba(239, 68, 68, var(--tw-ring-opacity))",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(239, 68, 68, var(--tw-border-opacity))"
    }
  },
  col: {
    full: fullCol,
    half: halfCol,
    third: thirdCol,
    twoThirds: twoThirdsCol,
    1: fullCol,
    "1/2": halfCol,
    "1/3": thirdCol,
    "2/3": twoThirdsCol
  }
};
var _default = input;
exports["default"] = _default;