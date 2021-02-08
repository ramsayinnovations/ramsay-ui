"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _Error = _interopRequireDefault(require("./Error"));

var _Help = _interopRequireDefault(require("./Help"));

var _InputBase = _interopRequireDefault(require("./InputBase"));

var _Label = _interopRequireDefault(require("./Label"));

var Input = function Input(_ref) {
  var _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      error = _ref.error,
      help = _ref.help,
      label = _ref.label,
      name = _ref.name,
      placeholder = _ref.placeholder;
  return (0, _jsxRuntime.jsxs)("div", {
    css: classes.base,
    children: [label && (0, _jsxRuntime.jsx)(_Label["default"], {
      name: name,
      className: classes.label,
      children: label
    }), (0, _jsxRuntime.jsx)(_InputBase["default"], {
      className: classes.input,
      wrapper: classes.wrapper,
      hasError: !!error,
      name: name,
      placeholder: placeholder
    }), help && (0, _jsxRuntime.jsx)(_Help["default"], {
      name: name,
      className: classes.help,
      children: help
    }), error && (0, _jsxRuntime.jsx)(_Error["default"], {
      name: name,
      className: classes.error,
      children: error
    })]
  });
};

var _default = Input;
exports["default"] = _default;