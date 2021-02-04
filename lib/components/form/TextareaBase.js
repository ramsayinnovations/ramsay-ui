"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _theme = _interopRequireDefault(require("../../themes/theme"));

var TextareaBase = function TextareaBase(_ref) {
  var _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      id = _ref.id,
      name = _ref.name,
      placeholder = _ref.placeholder,
      rows = _ref.rows;
  return (0, _jsxRuntime.jsx)("div", {
    css: [_theme["default"].textarea.wrapper, classes.wrapper, process.env.NODE_ENV === "production" ? "" : ";label:TextareaBase;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vVGV4dGFyZWFCYXNlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFJTyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9mb3JtL1RleHRhcmVhQmFzZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIkAvdGhlbWVzL3RoZW1lXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNvbnN0IFRleHRhcmVhQmFzZSA9ICh7IGNsYXNzZXMgPSB7fSwgaWQsIG5hbWUsIHBsYWNlaG9sZGVyLCByb3dzIH0pID0+IChcbiAgPGRpdiBjc3M9e1t0aGVtZS50ZXh0YXJlYS53cmFwcGVyLCBjbGFzc2VzLndyYXBwZXJdfT5cbiAgICA8dGV4dGFyZWFcbiAgICAgIGlkPXtpZH1cbiAgICAgIG5hbWU9e25hbWUgfHwgaWR9XG4gICAgICByb3dzPXtyb3dzIHx8IDN9XG4gICAgICBjc3M9e1t0aGVtZS50ZXh0YXJlYS5iYXNlLCBjbGFzc2VzLmJhc2VdfVxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgID48L3RleHRhcmVhPlxuICA8L2Rpdj5cbik7XG5cblRleHRhcmVhQmFzZS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgd3JhcHBlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBiYXNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KSxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByb3dzOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFCYXNlO1xuIl19 */"],
    children: (0, _jsxRuntime.jsx)("textarea", {
      id: id,
      name: name || id,
      rows: rows || 3,
      css: [_theme["default"].textarea.base, classes.base, process.env.NODE_ENV === "production" ? "" : ";label:TextareaBase;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vVGV4dGFyZWFCYXNlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFTTSIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9mb3JtL1RleHRhcmVhQmFzZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdGhlbWUgZnJvbSBcIkAvdGhlbWVzL3RoZW1lXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5cbmNvbnN0IFRleHRhcmVhQmFzZSA9ICh7IGNsYXNzZXMgPSB7fSwgaWQsIG5hbWUsIHBsYWNlaG9sZGVyLCByb3dzIH0pID0+IChcbiAgPGRpdiBjc3M9e1t0aGVtZS50ZXh0YXJlYS53cmFwcGVyLCBjbGFzc2VzLndyYXBwZXJdfT5cbiAgICA8dGV4dGFyZWFcbiAgICAgIGlkPXtpZH1cbiAgICAgIG5hbWU9e25hbWUgfHwgaWR9XG4gICAgICByb3dzPXtyb3dzIHx8IDN9XG4gICAgICBjc3M9e1t0aGVtZS50ZXh0YXJlYS5iYXNlLCBjbGFzc2VzLmJhc2VdfVxuICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgID48L3RleHRhcmVhPlxuICA8L2Rpdj5cbik7XG5cblRleHRhcmVhQmFzZS5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgd3JhcHBlcjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBiYXNlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KSxcbiAgaWQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICByb3dzOiBQcm9wVHlwZXMubnVtYmVyLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dGFyZWFCYXNlO1xuIl19 */"],
      placeholder: placeholder
    })
  });
};

var _default = TextareaBase;
exports["default"] = _default;