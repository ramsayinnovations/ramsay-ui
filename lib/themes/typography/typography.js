"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var typography = {
  title: {
    "default": {
      base: {
        "letterSpacing": "-0.025em",
        "fontWeight": "800"
      },
      color: {
        "--tw-text-opacity": "1",
        "color": "rgba(17, 24, 39, var(--tw-text-opacity))"
      },
      size: {
        "fontSize": "2.25rem",
        "lineHeight": "2.5rem",
        "@media (min-width: 640px)": {
          "fontSize": "3rem",
          "lineHeight": "1"
        },
        "@media (min-width: 768px)": {
          "fontSize": "3.75rem",
          "lineHeight": "1"
        }
      }
    },
    subtitle: {
      "default": {
        base: {},
        color: {
          "--tw-text-opacity": "1",
          "color": "rgba(107, 114, 128, var(--tw-text-opacity))"
        },
        size: {
          "fontSize": "1rem",
          "lineHeight": "1.5rem",
          "@media (min-width: 640px)": {
            "fontSize": "1.125rem",
            "lineHeight": "1.75rem"
          },
          "@media (min-width: 768px)": {
            "fontSize": "1.25rem",
            "lineHeight": "1.75rem"
          }
        }
      }
    }
  },
  text: {
    "default": {
      base: {}
    },
    paragraph: {},
    link: {
      "default": {
        base: {
          "fontWeight": "500"
        },
        color: {
          "--tw-text-opacity": "1",
          "color": "rgba(107, 114, 128, var(--tw-text-opacity))",
          ":hover": {
            "--tw-text-opacity": "1",
            "color": "rgba(17, 24, 39, var(--tw-text-opacity))"
          }
        },
        size: {
          "fontSize": "1rem",
          "lineHeight": "1.5rem",
          "@media (min-width: 640px)": {
            "fontSize": "1.125rem",
            "lineHeight": "1.75rem"
          },
          "@media (min-width: 768px)": {
            "fontSize": "1.25rem",
            "lineHeight": "1.75rem"
          }
        }
      }
    }
  },
  code: {
    "default": {
      base: {}
    }
  }
};
var _default = typography;
exports["default"] = _default;