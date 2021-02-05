"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _bs = require("react-icons/bs");

var HorizontalDivider = function HorizontalDivider(_ref) {
  var _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes;
  return (0, _jsxRuntime.jsxs)("div", {
    css: classes.wrapper,
    children: [(0, _jsxRuntime.jsx)("hr", {
      css: classes.lineFirst
    }), (0, _jsxRuntime.jsx)(_bs.BsCircle, {
      css: classes.icon
    }), (0, _jsxRuntime.jsx)("hr", {
      css: classes.lineSecond
    })]
  });
};

var _default = HorizontalDivider;
exports["default"] = _default;