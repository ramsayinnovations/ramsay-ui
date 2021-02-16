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
      rows = _ref.rows;
  return (0, _jsxRuntime.jsx)("div", {
    css: [textarea.wrapper, classes.wrapper, process.env.NODE_ENV === "production" ? "" : ";label:TextareaBase;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vVGV4dGFyZWFCYXNlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRTyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9mb3JtL1RleHRhcmVhQmFzZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIkAvdGhlbWVzL3RoZW1lXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNvbnN0IHtcbiAgZm9ybTogeyB0ZXh0YXJlYSB9LFxufSA9IHRoZW1lO1xuXG5jb25zdCBUZXh0YXJlYUJhc2UgPSAoeyBjbGFzc2VzID0ge30sIGlkLCBuYW1lLCBwbGFjZWhvbGRlciwgcm93cyB9KSA9PiAoXG4gIDxkaXYgY3NzPXtbdGV4dGFyZWEud3JhcHBlciwgY2xhc3Nlcy53cmFwcGVyXX0+XG4gICAgPHRleHRhcmVhXG4gICAgICBpZD17aWR9XG4gICAgICBuYW1lPXtuYW1lIHx8IGlkfVxuICAgICAgcm93cz17cm93cyB8fCAzfVxuICAgICAgY3NzPXtbdGV4dGFyZWEuYmFzZSwgY2xhc3Nlcy5iYXNlXX1cbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICA+PC90ZXh0YXJlYT5cbiAgPC9kaXY+XG4pO1xuXG5UZXh0YXJlYUJhc2UucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHdyYXBwZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYmFzZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSksXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgcm93czogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhQmFzZTtcbiJdfQ== */"],
    children: (0, _jsxRuntime.jsx)("textarea", {
      id: id,
      name: name || id,
      rows: rows || 3,
      css: [textarea.base, classes.base, process.env.NODE_ENV === "production" ? "" : ";label:TextareaBase;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vVGV4dGFyZWFCYXNlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhTSIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9mb3JtL1RleHRhcmVhQmFzZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIkAvdGhlbWVzL3RoZW1lXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNvbnN0IHtcbiAgZm9ybTogeyB0ZXh0YXJlYSB9LFxufSA9IHRoZW1lO1xuXG5jb25zdCBUZXh0YXJlYUJhc2UgPSAoeyBjbGFzc2VzID0ge30sIGlkLCBuYW1lLCBwbGFjZWhvbGRlciwgcm93cyB9KSA9PiAoXG4gIDxkaXYgY3NzPXtbdGV4dGFyZWEud3JhcHBlciwgY2xhc3Nlcy53cmFwcGVyXX0+XG4gICAgPHRleHRhcmVhXG4gICAgICBpZD17aWR9XG4gICAgICBuYW1lPXtuYW1lIHx8IGlkfVxuICAgICAgcm93cz17cm93cyB8fCAzfVxuICAgICAgY3NzPXtbdGV4dGFyZWEuYmFzZSwgY2xhc3Nlcy5iYXNlXX1cbiAgICAgIHBsYWNlaG9sZGVyPXtwbGFjZWhvbGRlcn1cbiAgICA+PC90ZXh0YXJlYT5cbiAgPC9kaXY+XG4pO1xuXG5UZXh0YXJlYUJhc2UucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIHdyYXBwZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYmFzZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSksXG4gIGlkOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBuYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBwbGFjZWhvbGRlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgcm93czogUHJvcFR5cGVzLm51bWJlcixcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRleHRhcmVhQmFzZTtcbiJdfQ== */"],
      placeholder: placeholder
    })
  });
};

var _default = TextareaBase;
exports["default"] = _default;