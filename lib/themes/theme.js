"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _menu = _interopRequireDefault(require("./menu/menu"));

var _navbar = _interopRequireDefault(require("./navbar/navbar"));

var _typography = _interopRequireDefault(require("./typography/typography"));

var _button = _interopRequireDefault(require("./button/button"));

var _form = _interopRequireDefault(require("./form/form"));

var _textarea = _interopRequireDefault(require("./form/textarea"));

var _select = _interopRequireDefault(require("./form/select"));

var _avatar = _interopRequireDefault(require("./avatar/avatar"));

var _card = _interopRequireDefault(require("./card/card"));

var _hero = _interopRequireDefault(require("./block/hero"));

var theme = {
  typography: _typography["default"],
  button: _button["default"],
  form: _form["default"],
  textarea: _textarea["default"],
  select: _select["default"],
  avatar: _avatar["default"],
  card: _card["default"],
  menu: _menu["default"],
  navbar: _navbar["default"],
  hero: _hero["default"]
};
var _default = theme;
exports["default"] = _default;