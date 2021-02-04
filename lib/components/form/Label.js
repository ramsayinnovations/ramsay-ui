"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _theme = _interopRequireDefault(require("../../themes/theme"));

var label = _theme["default"].form.label;

var Label = function Label(_ref) {
  var className = _ref.className,
      children = _ref.children,
      name = _ref.name;
  return (0, _jsxRuntime.jsx)("label", {
    htmlFor: name,
    css: [label.base, label.color, label.size, className, process.env.NODE_ENV === "production" ? "" : ";label:Label;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vTGFiZWwuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVF3QiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9mb3JtL0xhYmVsLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiQC90aGVtZXMvdGhlbWVcIjtcblxuY29uc3Qge1xuICBmb3JtOiB7IGxhYmVsIH0sXG59ID0gdGhlbWU7XG5cbmNvbnN0IExhYmVsID0gKHsgY2xhc3NOYW1lLCBjaGlsZHJlbiwgbmFtZSB9KSA9PiAoXG4gIDxsYWJlbCBodG1sRm9yPXtuYW1lfSBjc3M9e1tsYWJlbC5iYXNlLCBsYWJlbC5jb2xvciwgbGFiZWwuc2l6ZSwgY2xhc3NOYW1lXX0+XG4gICAge2NoaWxkcmVufVxuICA8L2xhYmVsPlxuKTtcblxuTGFiZWwucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuYW55LFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTGFiZWw7XG4iXX0= */"],
    children: children
  });
};

var _default = Label;
exports["default"] = _default;