"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _theme = _interopRequireDefault(require("../../themes/theme"));

var HeroRight = function HeroRight(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return (0, _jsxRuntime.jsx)("div", {
    css: [_theme["default"].hero.rightBlock["default"].base, className, process.env.NODE_ENV === "production" ? "" : ";label:HeroRight;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2hlcm8vSGVyb1JpZ2h0LmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJTyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9oZXJvL0hlcm9SaWdodC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIkAvdGhlbWVzL3RoZW1lXCI7XG5cbmNvbnN0IEhlcm9SaWdodCA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNzcz17W3RoZW1lLmhlcm8ucmlnaHRCbG9jay5kZWZhdWx0LmJhc2UsIGNsYXNzTmFtZV19PntjaGlsZHJlbn08L2Rpdj5cbik7XG5cbkhlcm9SaWdodC5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5vbmVPZihbXG4gICAgUHJvcFR5cGVzLnN0cmluZyxcbiAgICBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgXSksXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIZXJvUmlnaHQ7XG4iXX0= */"],
    children: children
  });
};

var _default = HeroRight;
exports["default"] = _default;