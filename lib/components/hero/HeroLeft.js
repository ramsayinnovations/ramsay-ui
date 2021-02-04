"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _theme = _interopRequireDefault(require("../../themes/theme"));

var HeroLeft = function HeroLeft(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return (0, _jsxRuntime.jsx)("div", {
    css: [_theme["default"].hero.leftBlock["default"].base, className, process.env.NODE_ENV === "production" ? "" : ";label:HeroLeft;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlcm8vSGVyb0xlZnQuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlPIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlcm8vSGVyb0xlZnQuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAL3RoZW1lcy90aGVtZVwiO1xuXG5jb25zdCBIZXJvTGVmdCA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNzcz17W3RoZW1lLmhlcm8ubGVmdEJsb2NrLmRlZmF1bHQuYmFzZSwgY2xhc3NOYW1lXX0+e2NoaWxkcmVufTwvZGl2PlxuKTtcblxuSGVyb0xlZnQucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIF0pLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGVyb0xlZnQ7XG4iXX0= */"],
    children: children
  });
};

var _default = HeroLeft;
exports["default"] = _default;