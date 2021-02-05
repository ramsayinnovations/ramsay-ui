"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var patterns = {
  right: "/img/pattern__contact--right.svg",
  "right-curve": "/img/pattern__cta--right.svg",
  left: "/img/pattern__contact--left.svg",
  "left-curve": "/img/pattern__cta--left.svg",
  "mobile-curve": "/img/pattern__cta--right-sm.svg"
};

var Pattern = function Pattern(_ref) {
  var _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      type = _ref.type;
  return (0, _jsxRuntime.jsx)("div", {
    className: classes.wrapper,
    children: (0, _jsxRuntime.jsx)("img", {
      src: patterns[type],
      className: classes.img
    })
  });
};

var _default = Pattern;
exports["default"] = _default;