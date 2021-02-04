"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _theme = _interopRequireDefault(require("../../themes/theme"));

var Card = function Card(_ref) {
  var children = _ref.children,
      className = _ref.className,
      divide = _ref.divide;
  return (0, _jsxRuntime.jsx)("div", {
    css: [_theme["default"].card["default"].base, divide && _theme["default"].card["default"].divide, className, process.env.NODE_ENV === "production" ? "" : ";label:Card;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NhcmQvQ2FyZC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0kiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvY2FyZC9DYXJkLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiQC90aGVtZXMvdGhlbWVcIjtcblxuY29uc3QgQ2FyZCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIGRpdmlkZSB9KSA9PiAoXG4gIDxkaXZcbiAgICBjc3M9e1tcbiAgICAgIHRoZW1lLmNhcmQuZGVmYXVsdC5iYXNlLFxuICAgICAgZGl2aWRlICYmIHRoZW1lLmNhcmQuZGVmYXVsdC5kaXZpZGUsXG4gICAgICBjbGFzc05hbWUsXG4gICAgXX1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9kaXY+XG4pO1xuXG5DYXJkLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZihbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihbUHJvcFR5cGVzLnN0cmluZ10pLFxuICBdKSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkaXZpZGU6IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiJdfQ== */"],
    children: children
  });
};

var _default = Card;
exports["default"] = _default;