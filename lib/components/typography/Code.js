"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = _interopRequireDefault(require("../../themes/theme"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var code = _theme["default"].typography.code;

var Code = _styledComponents["default"].div(function (_ref) {
  var className = _ref.className;
  return [code["default"].base, code["default"].color, code["default"].size, className];
});

Code.propTypes = {
  className: _propTypes["default"].any
};
var _default = Code;
exports["default"] = _default;