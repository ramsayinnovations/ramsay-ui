"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _theme = _interopRequireDefault(require("../../themes/theme"));

var error = _theme["default"].form.error;

var Error = function Error(_ref) {
  var children = _ref.children,
      className = _ref.className,
      name = _ref.name;
  return (0, _jsxRuntime.jsx)("p", {
    css: [error.space, error.color, error.size, className, process.env.NODE_ENV === "production" ? "" : ";label:Error;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vRXJyb3IuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVNJIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vRXJyb3IuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAL3RoZW1lcy90aGVtZVwiO1xuXG5jb25zdCB7XG4gIGZvcm06IHsgZXJyb3IgfSxcbn0gPSB0aGVtZTtcblxuY29uc3QgRXJyb3IgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBuYW1lIH0pID0+IChcbiAgPHBcbiAgICBjc3M9e1tlcnJvci5zcGFjZSwgZXJyb3IuY29sb3IsIGVycm9yLnNpemUsIGNsYXNzTmFtZV19XG4gICAgaWQ9e2Ake25hbWV9LWVycm9yYH1cbiAgPlxuICAgIHtjaGlsZHJlbn1cbiAgPC9wPlxuKTtcblxuRXJyb3IucHJvcFR5cGVzID0ge1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLmFueSxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgRXJyb3I7XG4iXX0= */"],
    id: "".concat(name, "-error"),
    children: children
  });
};

var _default = Error;
exports["default"] = _default;