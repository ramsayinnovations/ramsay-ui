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
      register = _ref.register,
      hasError = _ref.hasError,
      name = _ref.name,
      placeholder = _ref.placeholder,
      wrapper = _ref.wrapper;
  return (0, _jsxRuntime.jsx)("div", {
    css: [wrapper, col && input.col[col], process.env.NODE_ENV === "production" ? "" : ";label:InputBase;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vSW5wdXRCYXNlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpQlMiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZm9ybS9JbnB1dEJhc2UuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAL3RoZW1lcy90aGVtZVwiO1xuXG5jb25zdCB7XG4gIGZvcm06IHsgaW5wdXQgfSxcbn0gPSB0aGVtZTtcblxuY29uc3QgSW5wdXRCYXNlID0gKHtcbiAgY2xhc3NOYW1lLFxuICBjb2wsXG4gIHJlZ2lzdGVyLFxuICBoYXNFcnJvcixcbiAgbmFtZSxcbiAgcGxhY2Vob2xkZXIsXG4gIHdyYXBwZXIsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e1t3cmFwcGVyLCBjb2wgJiYgaW5wdXQuY29sW2NvbF1dfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICByZWY9e3JlZ2lzdGVyfVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIGlkPXtuYW1lfVxuICAgICAgICBjc3M9e1tcbiAgICAgICAgICBpbnB1dC5iYXNlLFxuICAgICAgICAgIGlucHV0LmJvcmRlcixcbiAgICAgICAgICBpbnB1dC5zaXplLFxuICAgICAgICAgIGlucHV0LnNwYWNlLFxuICAgICAgICAgIGlucHV0LmZvY3VzLFxuICAgICAgICAgIGlucHV0LmVycm9yLFxuICAgICAgICAgIGhhc0Vycm9yICYmIGlucHV0LmVycm9yLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgXX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBhcmlhLWludmFsaWQ9eyEhaGFzRXJyb3J9XG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2Ake25hbWV9LWVycm9yYH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5JbnB1dEJhc2UucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcImZ1bGxcIixcbiAgICBcImhhbGZcIixcbiAgICBcInRoaXJkXCIsXG4gICAgXCJ0d29UaGlyZHNcIixcbiAgICBcIjFcIixcbiAgICBcIjEvMlwiLFxuICAgIFwiMS8zXCIsXG4gICAgXCIyLzNcIixcbiAgXSksXG4gIGhhc0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgcmVnaXN0ZXI6IFByb3BUeXBlcy5hbnksXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRCYXNlO1xuIl19 */"],
    children: (0, _jsxRuntime.jsx)("input", {
      ref: register,
      type: "text",
      name: name,
      id: name,
      css: [input.base, input.border, input.size, input.space, input.focus, input.error, hasError && input.error, className, process.env.NODE_ENV === "production" ? "" : ";label:InputBase;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vSW5wdXRCYXNlLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1QlEiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZm9ybS9JbnB1dEJhc2UuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAL3RoZW1lcy90aGVtZVwiO1xuXG5jb25zdCB7XG4gIGZvcm06IHsgaW5wdXQgfSxcbn0gPSB0aGVtZTtcblxuY29uc3QgSW5wdXRCYXNlID0gKHtcbiAgY2xhc3NOYW1lLFxuICBjb2wsXG4gIHJlZ2lzdGVyLFxuICBoYXNFcnJvcixcbiAgbmFtZSxcbiAgcGxhY2Vob2xkZXIsXG4gIHdyYXBwZXIsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjc3M9e1t3cmFwcGVyLCBjb2wgJiYgaW5wdXQuY29sW2NvbF1dfT5cbiAgICAgIDxpbnB1dFxuICAgICAgICByZWY9e3JlZ2lzdGVyfVxuICAgICAgICB0eXBlPVwidGV4dFwiXG4gICAgICAgIG5hbWU9e25hbWV9XG4gICAgICAgIGlkPXtuYW1lfVxuICAgICAgICBjc3M9e1tcbiAgICAgICAgICBpbnB1dC5iYXNlLFxuICAgICAgICAgIGlucHV0LmJvcmRlcixcbiAgICAgICAgICBpbnB1dC5zaXplLFxuICAgICAgICAgIGlucHV0LnNwYWNlLFxuICAgICAgICAgIGlucHV0LmZvY3VzLFxuICAgICAgICAgIGlucHV0LmVycm9yLFxuICAgICAgICAgIGhhc0Vycm9yICYmIGlucHV0LmVycm9yLFxuICAgICAgICAgIGNsYXNzTmFtZSxcbiAgICAgICAgXX1cbiAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICBhcmlhLWludmFsaWQ9eyEhaGFzRXJyb3J9XG4gICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9e2Ake25hbWV9LWVycm9yYH1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5JbnB1dEJhc2UucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNvbDogUHJvcFR5cGVzLm9uZU9mKFtcbiAgICBcImZ1bGxcIixcbiAgICBcImhhbGZcIixcbiAgICBcInRoaXJkXCIsXG4gICAgXCJ0d29UaGlyZHNcIixcbiAgICBcIjFcIixcbiAgICBcIjEvMlwiLFxuICAgIFwiMS8zXCIsXG4gICAgXCIyLzNcIixcbiAgXSksXG4gIGhhc0Vycm9yOiBQcm9wVHlwZXMuYm9vbCxcbiAgcmVnaXN0ZXI6IFByb3BUeXBlcy5hbnksXG4gIG5hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBsYWNlaG9sZGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSW5wdXRCYXNlO1xuIl19 */"],
      placeholder: placeholder,
      "aria-invalid": !!hasError,
      "aria-describedby": "".concat(name, "-error")
    })
  });
};

var _default = InputBase;
exports["default"] = _default;