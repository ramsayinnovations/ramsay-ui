"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _theme = _interopRequireDefault(require("../../themes/theme"));

var help = _theme["default"].form.help;

var Help = function Help(_ref) {
  var children = _ref.children,
      className = _ref.className,
      name = _ref.name;
  return (0, _jsxRuntime.jsx)("p", {
    css: [help.space, help.color, help.size, className, process.env.NODE_ENV === "production" ? "" : ";label:Help;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vSGVscC5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUUsiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZm9ybS9IZWxwLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiQC90aGVtZXMvdGhlbWVcIjtcblxuY29uc3Qge1xuICBmb3JtOiB7IGhlbHAgfSxcbn0gPSB0aGVtZTtcblxuY29uc3QgSGVscCA9ICh7IGNoaWxkcmVuLCBjbGFzc05hbWUsIG5hbWUgfSkgPT4gKFxuICA8cCBjc3M9e1toZWxwLnNwYWNlLCBoZWxwLmNvbG9yLCBoZWxwLnNpemUsIGNsYXNzTmFtZV19IGlkPXtgJHtuYW1lfS1oZWxwYH0+XG4gICAge2NoaWxkcmVufVxuICA8L3A+XG4pO1xuXG5IZWxwLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5hbnksXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhlbHA7XG4iXX0= */"],
    id: "".concat(name, "-help"),
    children: children
  });
};

var _default = Help;
exports["default"] = _default;