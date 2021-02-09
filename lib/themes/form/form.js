"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _label = _interopRequireDefault(require("./label"));

var _input = _interopRequireDefault(require("./input"));

var _help = _interopRequireDefault(require("./help"));

var _error = _interopRequireDefault(require("./error"));

var _select = _interopRequireDefault(require("./select"));

var _textarea = _interopRequireDefault(require("./textarea"));

var form = {
  base: {
    "display": "grid"
  },
  label: _label["default"],
  input: _input["default"],
  help: _help["default"],
  error: _error["default"],
  select: _select["default"],
  textarea: _textarea["default"]
};
var _default = form;
exports["default"] = _default;