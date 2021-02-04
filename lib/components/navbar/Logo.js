"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _image = _interopRequireDefault(require("next/image"));

var _link = _interopRequireDefault(require("next/link"));

var Logo = function Logo(_ref) {
  var href = _ref.href,
      srName = _ref.srName,
      src = _ref.src,
      alt = _ref.alt,
      width = _ref.width,
      height = _ref.height,
      className = _ref.className;
  return (0, _jsxRuntime.jsx)(_link["default"], {
    href: href ? href : "/",
    children: (0, _jsxRuntime.jsxs)("a", {
      className: [className, {
        "marginLeft": "0px"
      }],
      children: [(0, _jsxRuntime.jsx)("span", {
        className: "sr-only",
        children: srName
      }), (0, _jsxRuntime.jsx)(_image["default"], {
        className: "w-auto h-8 sm:h-10",
        src: src,
        alt: alt,
        width: width,
        height: height
      })]
    })
  });
};

var _default = Logo;
exports["default"] = _default;