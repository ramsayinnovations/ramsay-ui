"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _theme = _interopRequireDefault(require("../../themes/theme"));

var Button = _styledComponents["default"].button(function (_ref) {
  var block = _ref.block,
      border = _ref.border,
      color = _ref.color,
      className = _ref.className,
      shape = _ref.shape,
      size = _ref.size;
  return [_theme["default"].button["default"].base, _theme["default"].button["default"].color, _theme["default"].button["default"].hover, _theme["default"].button["default"].focus, _theme["default"].button.border.base, block && {
    "width": "100%"
  }, border && _theme["default"].button.border[border], color && _theme["default"].button.color[color], shape && _theme["default"].button.borderRadius[shape], size && _theme["default"].button.size[size], className];
});

Button.propTypes = {
  block: _propTypes["default"].string,
  border: _propTypes["default"].oneOf(["gray", "grey", "transparent", "primary", "success", "danger"]),
  color: _propTypes["default"].oneOf(["primary", "success", "danger"]),
  children: _propTypes["default"].oneOf([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].any)]).isRequired,
  className: _propTypes["default"].any,
  shape: _propTypes["default"].oneOf(["flat", "pill", "rounded"]),
  size: _propTypes["default"].oneOf(["xs", "sm", "md", "lg", "xl"])
};
var _default = Button;
exports["default"] = _default;