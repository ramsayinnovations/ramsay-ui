"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _Label = _interopRequireDefault(require("./Label"));

var _Help = _interopRequireDefault(require("./Help"));

var _Error = _interopRequireDefault(require("./Error"));

var _TextareaBase = _interopRequireDefault(require("./TextareaBase"));

var Textarea = function Textarea(_ref) {
  var _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      error = _ref.error,
      help = _ref.help,
      id = _ref.id,
      label = _ref.label,
      name = _ref.name,
      placeholder = _ref.placeholder,
      rows = _ref.rows;
  return (0, _jsxRuntime.jsxs)("div", {
    css: [classes.base, process.env.NODE_ENV === "production" ? "" : ";label:Textarea;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vVGV4dGFyZWEuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCTyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9mb3JtL1RleHRhcmVhLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IEhlbHAgZnJvbSBcIi4vSGVscFwiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuL0Vycm9yXCI7XG5pbXBvcnQgVGV4dGFyZWFCYXNlIGZyb20gXCIuL1RleHRhcmVhQmFzZVwiO1xuXG5jb25zdCBUZXh0YXJlYSA9ICh7XG4gIGNsYXNzZXMgPSB7fSxcbiAgZXJyb3IsXG4gIGhlbHAsXG4gIGlkLFxuICBsYWJlbCxcbiAgbmFtZSxcbiAgcGxhY2Vob2xkZXIsXG4gIHJvd3MsXG59KSA9PiAoXG4gIDxkaXYgY3NzPXtbY2xhc3Nlcy5iYXNlXX0+XG4gICAge2xhYmVsICYmIChcbiAgICAgIDxMYWJlbCBuYW1lPXtuYW1lfSBjbGFzc05hbWU9e2NsYXNzZXMubGFiZWx9PlxuICAgICAgICB7bGFiZWx9XG4gICAgICA8L0xhYmVsPlxuICAgICl9XG4gICAgPFRleHRhcmVhQmFzZVxuICAgICAgY2xhc3Nlcz17Y2xhc3Nlcy50ZXh0YXJlYX1cbiAgICAgIG5hbWU9e25hbWV9XG4gICAgICBpZD17aWR9XG4gICAgICByb3dzPXtyb3dzfVxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgIC8+XG4gICAge2hlbHAgJiYgKFxuICAgICAgPEhlbHAgbmFtZT17bmFtZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmhlbHB9PlxuICAgICAgICB7aGVscH1cbiAgICAgIDwvSGVscD5cbiAgICApfVxuICAgIHtlcnJvciAmJiAoXG4gICAgICA8RXJyb3IgbmFtZT17bmFtZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmVycm9yfT5cbiAgICAgICAge2Vycm9yfVxuICAgICAgPC9FcnJvcj5cbiAgICApfVxuICA8L2Rpdj5cbik7XG5cblRleHRhcmVhLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBiYXNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHRleHRhcmVhOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgICAgYmFzZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICAgIHdyYXBwZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgfSksXG4gICAgaGVscDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSksXG4gIGVycm9yOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoZWxwOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbGFiZWw6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByb3dzOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWE7XG4iXX0= */"],
    children: [label && (0, _jsxRuntime.jsx)(_Label["default"], {
      name: name,
      className: classes.label,
      children: label
    }), (0, _jsxRuntime.jsx)(_TextareaBase["default"], {
      classes: classes.textarea,
      name: name,
      id: id,
      rows: rows,
      placeholder: placeholder
    }), help && (0, _jsxRuntime.jsx)(_Help["default"], {
      name: name,
      className: classes.help,
      children: help
    }), error && (0, _jsxRuntime.jsx)(_Error["default"], {
      name: name,
      className: classes.error,
      children: error
    })]
  });
};

var _default = Textarea;
exports["default"] = _default;