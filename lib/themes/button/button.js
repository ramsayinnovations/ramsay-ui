"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var borderGrey = {
  "--tw-border-opacity": "1",
  "borderColor": "rgba(209, 213, 219, var(--tw-border-opacity))",
  "--tw-text-opacity": "1",
  "color": "rgba(55, 65, 81, var(--tw-text-opacity))",
  "--tw-bg-opacity": "1",
  "backgroundColor": "rgba(255, 255, 255, var(--tw-bg-opacity))",
  ":hover": {
    "--tw-bg-opacity": "1",
    "backgroundColor": "rgba(249, 250, 251, var(--tw-bg-opacity))"
  }
};
var button = {
  "default": {
    base: {
      "display": "inline-flex",
      "alignItems": "center",
      "--tw-shadow": "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      "boxShadow": "var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",
      "fontWeight": "500"
    },
    color: {
      "--tw-text-opacity": "1",
      "color": "rgba(255, 255, 255, var(--tw-text-opacity))",
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(79, 70, 229, var(--tw-bg-opacity))"
    },
    hover: {
      ":hover": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(67, 56, 202, var(--tw-bg-opacity))"
      }
    },
    focus: {
      ":focus": {
        "outline": "2px solid transparent",
        "outlineOffset": "2px",
        "--tw-ring-offset-shadow": "var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color)",
        "--tw-ring-shadow": "var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)",
        "boxShadow": "var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000)",
        "--tw-ring-offset-width": "2px",
        "--tw-ring-opacity": "1",
        "--tw-ring-color": "rgba(99, 102, 241, var(--tw-ring-opacity))"
      }
    }
  },
  color: {
    primary: {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(59, 130, 246, var(--tw-bg-opacity))",
      ":hover": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(37, 99, 235, var(--tw-bg-opacity))"
      },
      "--tw-border-opacity": "1",
      "borderColor": "rgba(59, 130, 246, var(--tw-border-opacity))"
    },
    success: {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(16, 185, 129, var(--tw-bg-opacity))",
      ":hover": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(5, 150, 105, var(--tw-bg-opacity))"
      },
      "--tw-border-opacity": "1",
      "borderColor": "rgba(16, 185, 129, var(--tw-border-opacity))"
    },
    danger: {
      "--tw-bg-opacity": "1",
      "backgroundColor": "rgba(220, 38, 38, var(--tw-bg-opacity))",
      ":hover": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(185, 28, 28, var(--tw-bg-opacity))"
      },
      "--tw-border-opacity": "1",
      "borderColor": "rgba(220, 38, 38, var(--tw-border-opacity))"
    }
  },
  border: {
    base: {
      "borderWidth": "1px"
    },
    gray: borderGrey,
    grey: borderGrey,
    transparent: {
      "backgroundColor": "transparent"
    },
    primary: {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(59, 130, 246, var(--tw-border-opacity))",
      ":hover": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(59, 130, 246, var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(249, 250, 251, var(--tw-text-opacity))"
      }
    },
    success: {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(16, 185, 129, var(--tw-border-opacity))",
      ":hover": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(16, 185, 129, var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(249, 250, 251, var(--tw-text-opacity))"
      }
    },
    danger: {
      "--tw-border-opacity": "1",
      "borderColor": "rgba(239, 68, 68, var(--tw-border-opacity))",
      ":hover": {
        "--tw-bg-opacity": "1",
        "backgroundColor": "rgba(239, 68, 68, var(--tw-bg-opacity))",
        "--tw-text-opacity": "1",
        "color": "rgba(249, 250, 251, var(--tw-text-opacity))"
      }
    }
  },
  borderRadius: {
    flat: {
      "borderRadius": "0px"
    },
    rounded: {
      "borderRadius": "0.125rem"
    },
    pill: {
      "borderRadius": "9999px"
    }
  },
  size: {
    xs: {
      "paddingLeft": "0.625rem",
      "paddingRight": "0.625rem",
      "paddingTop": "0.375rem",
      "paddingBottom": "0.375rem",
      "fontSize": "0.75rem",
      "lineHeight": "1rem"
    },
    sm: {
      "paddingLeft": "0.75rem",
      "paddingRight": "0.75rem",
      "paddingTop": "0.5rem",
      "paddingBottom": "0.5rem",
      "fontSize": "0.875rem",
      "lineHeight": "1.25rem"
    },
    md: {
      "paddingLeft": "1rem",
      "paddingRight": "1rem",
      "paddingTop": "0.5rem",
      "paddingBottom": "0.5rem",
      "fontSize": "0.875rem",
      "lineHeight": "1.25rem"
    },
    lg: {
      "paddingLeft": "1.5rem",
      "paddingRight": "1.5rem",
      "paddingTop": "0.75rem",
      "paddingBottom": "0.75rem",
      "fontSize": "1rem",
      "lineHeight": "1.5rem"
    }
  }
};
var _default = button;
exports["default"] = _default;