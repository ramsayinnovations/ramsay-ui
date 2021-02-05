"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Curve = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var curves = {
  top: "/img/curve__contact--top.svg",
  footer: "/img/curve__footer--top.svg",
  bottom: "/img/curve__contact--bottom.svg",
  "mobile-lower": "/img/curve__cta--lower-sm.svg"
};

var Curve = function Curve(_ref) {
  var classes = _ref.classes,
      type = _ref.type;
  return (0, _jsxRuntime.jsx)("div", {
    className: classes.wrapper,
    children: (0, _jsxRuntime.jsx)("img", {
      className: classes.img,
      src: curves[type]
    })
  });
};

exports.Curve = Curve;
var _default = Curve;
exports["default"] = _default;