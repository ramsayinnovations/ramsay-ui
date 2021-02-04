"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = _interopRequireDefault(require("../../themes/theme"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var text = _theme["default"].typography.text;

var Text = _styledComponents["default"].div(function (_ref) {
  var className = _ref.className,
      paragraph = _ref.paragraph,
      link = _ref.link;
  return [text["default"].base, text["default"].color, text["default"].size, link && text.link.base, link && text.link.color, link && text.link.size, paragraph && text.paragraph.base, paragraph && text.paragraph.color, paragraph && text.paragraph.size, className];
});

Text.propTypes = {
  className: _propTypes["default"].any,
  link: _propTypes["default"].string,
  paragraph: _propTypes["default"].string
};
var _default = Text;
exports["default"] = _default;