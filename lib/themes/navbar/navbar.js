"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var navbar = {
  close: {
    base: {
      "padding": "0.5rem",
      "borderRadius": "0.375rem"
    },
    bg: {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
      ":hover": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(243, 244, 246, var(--tw-bg-opacity))"
      }
    },
    color: {
      "--tw-text-opacity": "1",
      "color": "rgba(29, 78, 216, var(--tw-text-opacity))",
      ":hover": {
        "--tw-text-opacity": "1",
        "color": "rgba(30, 64, 175, var(--tw-text-opacity))"
      }
    },
    focus: {
      ":focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px",
        "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
        "--tw-ring-inset": "inset",
        "--tw-ring-opacity": "1",
        "--tw-ring-color": "rgba(29, 78, 216, var(--tw-ring-opacity))"
      }
    },
    size: {
      "fontSize": "1.125rem",
      "lineHeight": "1.75rem",
      "@media (min-width: 768px)": {
        "fontSize": "1.5rem",
        "lineHeight": "2rem"
      }
    },
    wrapper: {}
  },
  hamburger: {
    base: {
      "padding": "0.5rem",
      "borderRadius": "0.375rem"
    },
    bg: {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
      ":hover": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(243, 244, 246, var(--tw-bg-opacity))"
      }
    },
    color: {
      "--tw-text-opacity": "1",
      "color": "rgba(156, 163, 175, var(--tw-text-opacity))",
      ":hover": {
        "--tw-text-opacity": "1",
        "color": "rgba(107, 114, 128, var(--tw-text-opacity))"
      }
    },
    focus: {
      ":focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px",
        "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
        "--tw-ring-inset": "inset",
        "--tw-ring-opacity": "1",
        "--tw-ring-color": "rgba(29, 78, 216, var(--tw-ring-opacity))"
      }
    }
  },
  mobile: {
    base: {
      "position": "absolute",
      "top": "0px",
      "left": "0px",
      "right": "0px",
      "padding": "0.5rem",
      "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
      "transitionDuration": "150ms",
      "--tw-translate-x": "0",
      "--tw-translate-y": "0",
      "--tw-rotate": "0",
      "--tw-skew-x": "0",
      "--tw-skew-y": "0",
      "--tw-scale-x": "1",
      "--tw-scale-y": "1",
      "transform": "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",
      "transformOrigin": "top right",
      "@media (min-width: 768px)": {
        "display": "none"
      }
    },
    wrapper: {
      "borderRadius": "0.5rem",
      "--tw-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
      "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
      "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
      "--tw-ring-opacity": "0.05",
      "--tw-ring-color": "rgba(0, 0, 0, var(--tw-ring-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
      "> :not([hidden]) ~ :not([hidden])": {
        "--tw-divide-y-reverse": 0,
        "borderTopWidth": "calc(2px * calc(1 - var(--tw-divide-y-reverse)))",
        "borderBottomWidth": "calc(2px * var(--tw-divide-y-reverse))",
        "--tw-divide-opacity": "1",
        "borderColor": "rgba(249, 250, 251, var(--tw-divide-opacity))"
      }
    },
    main: {
      "paddingTop": "1.25rem",
      "paddingBottom": "1.5rem",
      "paddingLeft": "1.25rem",
      "paddingRight": "1.25rem"
    }
  },
  mobileHeader: {
    base: {
      "display": "flex",
      "alignItems": "center",
      "justifyContent": "space-between"
    }
  }
};
var _default = navbar;
exports["default"] = _default;