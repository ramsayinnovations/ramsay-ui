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
      register = _ref.register,
      rows = _ref.rows;
  return (0, _jsxRuntime.jsxs)("div", {
    css: [classes.base, process.env.NODE_ENV === "production" ? "" : ";label:Textarea;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vVGV4dGFyZWEuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlCTyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9mb3JtL1RleHRhcmVhLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBMYWJlbCBmcm9tIFwiLi9MYWJlbFwiO1xuaW1wb3J0IEhlbHAgZnJvbSBcIi4vSGVscFwiO1xuaW1wb3J0IEVycm9yIGZyb20gXCIuL0Vycm9yXCI7XG5pbXBvcnQgVGV4dGFyZWFCYXNlIGZyb20gXCIuL1RleHRhcmVhQmFzZVwiO1xuXG5jb25zdCBUZXh0YXJlYSA9ICh7XG4gIGNsYXNzZXMgPSB7fSxcbiAgZXJyb3IsXG4gIGhlbHAsXG4gIGlkLFxuICBsYWJlbCxcbiAgbmFtZSxcbiAgcGxhY2Vob2xkZXIsXG4gIHJlZ2lzdGVyLFxuICByb3dzLFxufSkgPT4gKFxuICA8ZGl2IGNzcz17W2NsYXNzZXMuYmFzZV19PlxuICAgIHtsYWJlbCAmJiAoXG4gICAgICA8TGFiZWwgbmFtZT17bmFtZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmxhYmVsfT5cbiAgICAgICAge2xhYmVsfVxuICAgICAgPC9MYWJlbD5cbiAgICApfVxuICAgIDxUZXh0YXJlYUJhc2VcbiAgICAgIGNsYXNzZXM9e2NsYXNzZXMudGV4dGFyZWF9XG4gICAgICBuYW1lPXtuYW1lfVxuICAgICAgaWQ9e2lkfVxuICAgICAgcmVnaXN0ZXI9e3JlZ2lzdGVyfVxuICAgICAgcm93cz17cm93c31cbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICAvPlxuICAgIHtoZWxwICYmIChcbiAgICAgIDxIZWxwIG5hbWU9e25hbWV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5oZWxwfT5cbiAgICAgICAge2hlbHB9XG4gICAgICA8L0hlbHA+XG4gICAgKX1cbiAgICB7ZXJyb3IgJiYgKFxuICAgICAgPEVycm9yIG5hbWU9e25hbWV9IGNsYXNzTmFtZT17Y2xhc3Nlcy5lcnJvcn0+XG4gICAgICAgIHtlcnJvcn1cbiAgICAgIDwvRXJyb3I+XG4gICAgKX1cbiAgPC9kaXY+XG4pO1xuXG5UZXh0YXJlYS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYmFzZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBsYWJlbDogUHJvcFR5cGVzLnN0cmluZyxcbiAgICB0ZXh0YXJlYTogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICAgIGJhc2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgICB3cmFwcGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIH0pLFxuICAgIGhlbHA6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgZXJyb3I6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pLFxuICBlcnJvcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgaGVscDogUHJvcFR5cGVzLnN0cmluZyxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGxhYmVsOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgcmVnaXN0ZXI6IFByb3BUeXBlcy5hbnksXG4gIHJvd3M6IFByb3BUeXBlcy5udW1iZXIsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0YXJlYTtcbiJdfQ== */"],
    children: [label && (0, _jsxRuntime.jsx)(_Label["default"], {
      name: name,
      className: classes.label,
      children: label
    }), (0, _jsxRuntime.jsx)(_TextareaBase["default"], {
      classes: classes.textarea,
      name: name,
      id: id,
      register: register,
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