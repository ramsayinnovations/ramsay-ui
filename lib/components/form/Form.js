"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _theme = _interopRequireDefault(require("../../themes/theme"));

var Form = function Form(_ref) {
  var className = _ref.className,
      children = _ref.children,
      id = _ref.id,
      name = _ref.name,
      onSubmit = _ref.onSubmit,
      onReset = _ref.onReset;
  return (0, _jsxRuntime.jsx)("form", {
    css: [_theme["default"].form.base, className, process.env.NODE_ENV === "production" ? "" : ";label:Form;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vRm9ybS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBS0kiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZm9ybS9Gb3JtLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiQC90aGVtZXMvdGhlbWVcIjtcblxuY29uc3QgRm9ybSA9ICh7IGNsYXNzTmFtZSwgY2hpbGRyZW4sIGlkLCBuYW1lLCBvblN1Ym1pdCwgb25SZXNldCB9KSA9PiAoXG4gIDxmb3JtXG4gICAgY3NzPXtbdGhlbWUuZm9ybS5iYXNlLCBjbGFzc05hbWVdfVxuICAgIGlkPXtpZH1cbiAgICBuYW1lPXtuYW1lIHx8IGlkfVxuICAgIG9uU3VibWl0PXtvblN1Ym1pdH1cbiAgICBvblJlc2V0PXtvblJlc2V0fVxuICA+XG4gICAge2NoaWxkcmVufVxuICA8L2Zvcm0+XG4pO1xuXG5Gb3JtLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBdKS5pc1JlcXVpcmVkLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZy5pc1JlcXVpcmVkLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBvblN1Ym1pdDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbiAgb25SZXNldDogUHJvcFR5cGVzLmZ1bmMuaXNSZXF1aXJlZCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEZvcm07XG4iXX0= */"],
    id: id,
    name: name || id,
    onSubmit: onSubmit,
    onReset: onReset,
    children: children
  });
};

var _default = Form;
exports["default"] = _default;