"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = _interopRequireDefault(require("../../themes/theme"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var title = _theme["default"].typography.title;

var Title = _styledComponents["default"].h2(function (_ref) {
  var className = _ref.className,
      subtitle = _ref.subtitle;
  return [title["default"].base, title["default"].color, title["default"].size, subtitle && title.subtitle.base, subtitle && title.subtitle.color, subtitle && title.subtitle.size, className];
});

Title.propTypes = {
  className: _propTypes["default"].any,
  subtitle: _propTypes["default"].string
};
var _default = Title;
exports["default"] = _default;