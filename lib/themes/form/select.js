"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var select = {
  base: {
    "width": "100%",
    "maxWidth": "20rem",
    "marginLeft": "auto",
    "marginRight": "auto"
  },
  listBox: {
    "> :not([hidden]) ~ :not([hidden])": {
      "--tw-space-y-reverse": 0,
      "marginTop": "calc(0.25rem * calc(1 - var(--tw-space-y-reverse)))",
      "marginBottom": "calc(0.25rem * var(--tw-space-y-reverse))"
    }
  },
  label: {
    "display": "block",
    "fontSize": "0.875rem",
    "lineHeight": "1.25rem",
    "fontWeight": "500",
    "--tw-text-opacity": "1",
    "color": "rgba(55, 65, 81, var(--tw-text-opacity))"
  },
  main: {
    "position": "relative"
  },
  buttonWrapper: {
    "display": "inline-block",
    "width": "100%",
    "borderRadius": "0.375rem",
    "--tw-shadow": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
    "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
  },
  button: {
    base: {
      "cursor": "default",
      "position": "relative",
      "width": "100%",
      "borderRadius": "0.375rem",
      "borderWidth": "1px",
      "--tw-border-opacity": "1",
      "borderColor": "rgba(209, 213, 219, var(--tw-border-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
      "paddingLeft": "0.75rem",
      "paddingRight": "2.5rem",
      "paddingTop": "0.5rem",
      "paddingBottom": "0.5rem",
      "textAlign": "left",
      ":focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px",
        "--tw-shadow": "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
        "--tw-border-opacity": "1",
        "borderColor": "rgba(147, 197, 253, var(--tw-border-opacity))"
      },
      "transitionProperty": "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      "transitionTimingFunction": "cubic-bezier(0.4, 0, 0.2, 1)",
      "transitionDuration": "150ms",
      "@media (min-width: 640px)": {
        "fontSize": "0.875rem",
        "lineHeight": "1.25rem"
      }
    },
    placeholder: {
      "display": "block",
      "overflow": "hidden",
      "textOverflow": "ellipsis",
      "whiteSpace": "nowrap",
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))"
    },
    value: {
      "display": "block",
      "overflow": "hidden",
      "textOverflow": "ellipsis",
      "whiteSpace": "nowrap",
      "--tw-text-opacity": "1",
      "color": "rgba(0, 0, 0, var(--tw-text-opacity))"
    },
    iconWrapper: {
      "position": "absolute",
      "top": "0px",
      "bottom": "0px",
      "right": "0px",
      "display": "flex",
      "alignItems": "center",
      "paddingRight": "0.5rem",
      "pointerEvents": "none"
    },
    icon: {
      "height": "1.25rem",
      "width": "1.25rem",
      "--tw-text-opacity": "1",
      "color": "rgba(156, 163, 175, var(--tw-text-opacity))"
    }
  },
  options: {
    transition: {
      "position": "absolute",
      "marginTop": "0.25rem",
      "width": "100%",
      "borderRadius": "0.375rem",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
      "--tw-shadow": "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
      "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)"
    },
    base: {
      "maxHeight": "15rem",
      "borderRadius": "0.375rem",
      "paddingTop": "0.25rem",
      "paddingBottom": "0.25rem",
      "fontSize": "1rem",
      "lineHeight": "1.5rem",
      "--tw-shadow": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
      "overflow": "auto",
      ":focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px"
      },
      "@media (min-width: 640px)": {
        "fontSize": "0.875rem",
        "lineHeight": "1.25rem"
      }
    }
  },
  option: {
    base: {
      "cursor": "default",
      "userSelect": "none",
      "position": "relative",
      "paddingTop": "0.5rem",
      "paddingBottom": "0.5rem",
      "paddingLeft": "2rem",
      "paddingRight": "1rem"
    },
    color: {
      "default": {
        "--tw-text-opacity": "1",
        "color": "rgba(17, 24, 39, var(--tw-text-opacity))"
      },
      active: {
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(29, 78, 216, var(--tw-bg-opacity))"
      }
    },
    value: {
      base: {
        "display": "block",
        "overflow": "hidden",
        "textOverflow": "ellipsis",
        "whiteSpace": "nowrap"
      },
      color: {
        "default": {
          "fontWeight": "400"
        },
        selected: {
          "fontWeight": "600"
        }
      }
    },
    selectedValue: {
      base: {
        "position": "absolute",
        "top": "0px",
        "bottom": "0px",
        "left": "0px",
        "display": "flex",
        "alignItems": "center",
        "paddingLeft": "0.375rem"
      },
      "default": {
        "--tw-text-opacity": "1",
        "color": "rgba(29, 78, 216, var(--tw-text-opacity))"
      },
      active: {
        "--tw-text-opacity": "1",
        "color": "rgba(255, 255, 255, var(--tw-text-opacity))"
      },
      svg: {
        "height": "1.25rem",
        "width": "1.25rem"
      }
    }
  }
};
var _default = select;
exports["default"] = _default;