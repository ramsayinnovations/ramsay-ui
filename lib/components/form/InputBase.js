"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _theme = _interopRequireDefault(require("../../themes/theme"));

var input = _theme["default"].form.input;

var InputBase = function InputBase(_ref) {
  var className = _ref.className,
      col = _ref.col,
      hasError = _ref.hasError,
      name = _ref.name,
      placeholder = _ref.placeholder,
      wrapper = _ref.wrapper;
  return (0, _jsxRuntime.jsx)("div", {
    className: [wrapper, col && input.col[col]],
    children: (0, _jsxRuntime.jsx)("input", {
      type: "text",
      name: name,
      id: name,
      css: [input.base, input.border, input.size, input.space, input.focus, input.error, hasError && input.error, className, process.env.NODE_ENV === "production" ? "" : ";label:InputBase;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vSW5wdXRCYXNlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxQlEiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZm9ybS9JbnB1dEJhc2UuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAL3RoZW1lcy90aGVtZVwiO1xuXG5jb25zdCB7XG4gIGZvcm06IHsgaW5wdXQgfSxcbn0gPSB0aGVtZTtcblxuY29uc3QgSW5wdXRCYXNlID0gKHtcbiAgY2xhc3NOYW1lLFxuICBjb2wsXG4gIGhhc0Vycm9yLFxuICBuYW1lLFxuICBwbGFjZWhvbGRlcixcbiAgd3JhcHBlcixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17W3dyYXBwZXIsIGNvbCAmJiBpbnB1dC5jb2xbY29sXV19PlxuICAgICAgPGlucHV0XG4gICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgbmFtZT17bmFtZX1cbiAgICAgICAgaWQ9e25hbWV9XG4gICAgICAgIGNzcz17W1xuICAgICAgICAgIGlucHV0LmJhc2UsXG4gICAgICAgICAgaW5wdXQuYm9yZGVyLFxuICAgICAgICAgIGlucHV0LnNpemUsXG4gICAgICAgICAgaW5wdXQuc3BhY2UsXG4gICAgICAgICAgaW5wdXQuZm9jdXMsXG4gICAgICAgICAgaW5wdXQuZXJyb3IsXG4gICAgICAgICAgaGFzRXJyb3IgJiYgaW5wdXQuZXJyb3IsXG4gICAgICAgICAgY2xhc3NOYW1lLFxuICAgICAgICBdfVxuICAgICAgICBwbGFjZWhvbGRlcj17cGxhY2Vob2xkZXJ9XG4gICAgICAgIGFyaWEtaW52YWxpZD17ISFoYXNFcnJvcn1cbiAgICAgICAgYXJpYURlc2NyaWJlZGJ5PXtgJHtuYW1lfS1lcnJvcmB9XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSW5wdXRCYXNlLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBjb2w6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJmdWxsXCIsXG4gICAgXCJoYWxmXCIsXG4gICAgXCJ0aGlyZFwiLFxuICAgIFwidHdvVGhpcmRzXCIsXG4gICAgXCIxXCIsXG4gICAgXCIxLzJcIixcbiAgICBcIjEvM1wiLFxuICAgIFwiMi8zXCIsXG4gIF0pLFxuICBoYXNFcnJvcjogUHJvcFR5cGVzLmJvb2wsXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRCYXNlO1xuIl19 */"],
      placeholder: placeholder,
      "aria-invalid": !!hasError,
      ariaDescribedby: "".concat(name, "-error")
    })
  });
};

var _default = InputBase;
exports["default"] = _default;