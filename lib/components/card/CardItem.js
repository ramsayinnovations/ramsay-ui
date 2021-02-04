"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _theme = _interopRequireDefault(require("../../themes/theme"));

var CardItem = function CardItem(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return (0, _jsxRuntime.jsx)("div", {
    css: [_theme["default"].card["default"].item, className, process.env.NODE_ENV === "production" ? "" : ";label:CardItem;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NhcmQvQ2FyZEl0ZW0uanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlPIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2NhcmQvQ2FyZEl0ZW0uanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAL3RoZW1lcy90aGVtZVwiO1xuXG5jb25zdCBDYXJkSXRlbSA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUgfSkgPT4gKFxuICA8ZGl2IGNzcz17W3RoZW1lLmNhcmQuZGVmYXVsdC5pdGVtLCBjbGFzc05hbWVdfT57Y2hpbGRyZW59PC9kaXY+XG4pO1xuXG5DYXJkSXRlbS5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoW1Byb3BUeXBlcy5zdHJpbmddKSxcbiAgXSksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENhcmRJdGVtO1xuIl19 */"],
    children: children
  });
};

var _default = CardItem;
exports["default"] = _default;