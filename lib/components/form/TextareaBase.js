"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _theme = _interopRequireDefault(require("../../themes/theme"));

var textarea = _theme["default"].form.textarea;

var TextareaBase = function TextareaBase(_ref) {
  var _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      id = _ref.id,
      name = _ref.name,
      placeholder = _ref.placeholder,
      rows = _ref.rows,
      register = _ref.register;
  return (0, _jsxRuntime.jsx)("div", {
    css: [textarea.wrapper, classes.wrapper, process.env.NODE_ENV === "production" ? "" : ";label:TextareaBase;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vVGV4dGFyZWFCYXNlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlTyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9mb3JtL1RleHRhcmVhQmFzZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIkAvdGhlbWVzL3RoZW1lXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNvbnN0IHtcbiAgZm9ybTogeyB0ZXh0YXJlYSB9LFxufSA9IHRoZW1lO1xuXG5jb25zdCBUZXh0YXJlYUJhc2UgPSAoe1xuICBjbGFzc2VzID0ge30sXG4gIGlkLFxuICBuYW1lLFxuICBwbGFjZWhvbGRlcixcbiAgcm93cyxcbiAgcmVnaXN0ZXIsXG59KSA9PiAoXG4gIDxkaXYgY3NzPXtbdGV4dGFyZWEud3JhcHBlciwgY2xhc3Nlcy53cmFwcGVyXX0+XG4gICAgPHRleHRhcmVhXG4gICAgICByZWY9e3JlZ2lzdGVyfVxuICAgICAgaWQ9e2lkfVxuICAgICAgbmFtZT17bmFtZSB8fCBpZH1cbiAgICAgIHJvd3M9e3Jvd3MgfHwgM31cbiAgICAgIGNzcz17W3RleHRhcmVhLmJhc2UsIGNsYXNzZXMuYmFzZV19XG4gICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgPjwvdGV4dGFyZWE+XG4gIDwvZGl2PlxuKTtcblxuVGV4dGFyZWFCYXNlLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICB3cmFwcGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGJhc2U6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pLFxuICBpZDogUHJvcFR5cGVzLnN0cmluZyxcbiAgbmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgcGxhY2Vob2xkZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHJvd3M6IFByb3BUeXBlcy5udW1iZXIsXG4gIHJlZ2lzdGVyOiBQcm9wVHlwZXMuYW55LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFCYXNlO1xuIl19 */"],
    children: (0, _jsxRuntime.jsx)("textarea", {
      ref: register,
      id: id,
      name: name || id,
      rows: rows || 3,
      css: [textarea.base, classes.base, process.env.NODE_ENV === "production" ? "" : ";label:TextareaBase;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vVGV4dGFyZWFCYXNlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQk0iLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZm9ybS9UZXh0YXJlYUJhc2UuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRoZW1lIGZyb20gXCJAL3RoZW1lcy90aGVtZVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuXG5jb25zdCB7XG4gIGZvcm06IHsgdGV4dGFyZWEgfSxcbn0gPSB0aGVtZTtcblxuY29uc3QgVGV4dGFyZWFCYXNlID0gKHtcbiAgY2xhc3NlcyA9IHt9LFxuICBpZCxcbiAgbmFtZSxcbiAgcGxhY2Vob2xkZXIsXG4gIHJvd3MsXG4gIHJlZ2lzdGVyLFxufSkgPT4gKFxuICA8ZGl2IGNzcz17W3RleHRhcmVhLndyYXBwZXIsIGNsYXNzZXMud3JhcHBlcl19PlxuICAgIDx0ZXh0YXJlYVxuICAgICAgcmVmPXtyZWdpc3Rlcn1cbiAgICAgIGlkPXtpZH1cbiAgICAgIG5hbWU9e25hbWUgfHwgaWR9XG4gICAgICByb3dzPXtyb3dzIHx8IDN9XG4gICAgICBjc3M9e1t0ZXh0YXJlYS5iYXNlLCBjbGFzc2VzLmJhc2VdfVxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgID48L3RleHRhcmVhPlxuICA8L2Rpdj5cbik7XG5cblRleHRhcmVhQmFzZS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgd3JhcHBlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBiYXNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KSxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByb3dzOiBQcm9wVHlwZXMubnVtYmVyLFxuICByZWdpc3RlcjogUHJvcFR5cGVzLmFueSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhQmFzZTtcbiJdfQ== */"],
      placeholder: placeholder
    })
  });
};

var _default = TextareaBase;
exports["default"] = _default;