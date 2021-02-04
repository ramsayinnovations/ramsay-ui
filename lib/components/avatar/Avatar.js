"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _theme = _interopRequireDefault(require("../../themes/theme"));

var Avatar = function Avatar(_ref) {
  var className = _ref.className,
      src = _ref.src,
      alt = _ref.alt,
      shape = _ref.shape,
      size = _ref.size;
  return (0, _jsxRuntime.jsx)("img", {
    css: [_theme["default"].avatar["default"].base, shape && _theme["default"].avatar["default"].shape[shape], size && _theme["default"].avatar["default"].size[size], className, process.env.NODE_ENV === "production" ? "" : ";label:Avatar;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F2YXRhci9BdmF0YXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtJIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2F2YXRhci9BdmF0YXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAL3RoZW1lcy90aGVtZVwiO1xuXG5jb25zdCBBdmF0YXIgPSAoeyBjbGFzc05hbWUsIHNyYywgYWx0LCBzaGFwZSwgc2l6ZSB9KSA9PiAoXG4gIDxpbWdcbiAgICBjc3M9e1tcbiAgICAgIHRoZW1lLmF2YXRhci5kZWZhdWx0LmJhc2UsXG4gICAgICBzaGFwZSAmJiB0aGVtZS5hdmF0YXIuZGVmYXVsdC5zaGFwZVtzaGFwZV0sXG4gICAgICBzaXplICYmIHRoZW1lLmF2YXRhci5kZWZhdWx0LnNpemVbc2l6ZV0sXG4gICAgICBjbGFzc05hbWUsXG4gICAgXX1cbiAgICBzcmM9e3NyY31cbiAgICBhbHQ9e2FsdCB8fCBcIlwifVxuICAvPlxuKTtcblxuQXZhdGFyLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBzcmM6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGFsdDogUHJvcFR5cGVzLnN0cmluZyxcbiAgc2hhcGU6IFByb3BUeXBlcy5vbmVPZihbXCJwaWxsXCIsIFwicm91bmRlZFwiXSksXG4gIHNpemU6IFByb3BUeXBlcy5vbmVPZihbXCJ4c1wiLCBcInNtXCIsIFwibWRcIiwgXCJsZ1wiLCBcInhsXCJdKSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEF2YXRhcjtcbiJdfQ== */"],
    src: src,
    alt: alt || ""
  });
};

var _default = Avatar;
exports["default"] = _default;