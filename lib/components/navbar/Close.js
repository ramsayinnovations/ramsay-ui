"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _react = _interopRequireDefault(require("react"));

var _theme = _interopRequireDefault(require("../../themes/theme"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CloseSvg = function CloseSvg(props) {
  return (0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: (0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      d: "M4.293 4.293a1 1 0 11.414 0 NaN NaNlNaN NaN NaN NaNa1 1 0 111.414 1.414 NaN NaNlNaN NaN NaN NaNa1 1 0 1-1.414 NaN NaNlNaN NaN NaN NaNa1 1 0 1-1.414 NaN NaNlNaN NaN NaN NaNa1 1 0 10-1.414 NaN NaNz",
      clipRule: "evenodd",
      stroke: "none"
    })
  }));
};

CloseSvg.defaultProps = {
  stroke: "currentColor",
  fill: "currentColor",
  strokeWidth: "0",
  viewBox: "0 0 20 20",
  height: "1em",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
};

var Close = function Close(_ref) {
  var setMobileMenuOpen = _ref.setMobileMenuOpen,
      _ref$srOnly = _ref.srOnly,
      srOnly = _ref$srOnly === void 0 ? "Close Menu" : _ref$srOnly,
      _ref$wrapper = _ref.wrapper,
      wrapper = _ref$wrapper === void 0 ? "-mr-2" : _ref$wrapper;
  return (0, _jsxRuntime.jsx)("div", {
    className: wrapper,
    children: (0, _jsxRuntime.jsxs)("button", {
      type: "button",
      onClick: function onClick() {
        return setMobileMenuOpen(false);
      },
      css: ["display:inline-flex;align-items:center;justify-content:center;", _theme["default"].navbar.close.base, _theme["default"].navbar.close.bg, _theme["default"].navbar.close.focus, process.env.NODE_ENV === "production" ? "" : ";label:Close;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25hdmJhci9DbG9zZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZVEiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbmF2YmFyL0Nsb3NlLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAL3RoZW1lcy90aGVtZVwiO1xuaW1wb3J0IENsb3NlU3ZnIGZyb20gXCJAL2Fzc2V0cy9zdmcvaGFtYnVyZ2VyX19jbG9zZS5zdmdcIjtcblxuY29uc3QgQ2xvc2UgPSAoe1xuICBzZXRNb2JpbGVNZW51T3BlbixcbiAgc3JPbmx5ID0gXCJDbG9zZSBNZW51XCIsXG4gIHdyYXBwZXIgPSBcIi1tci0yXCIsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3dyYXBwZXJ9PlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgb25DbGljaz17KCkgPT4gc2V0TW9iaWxlTWVudU9wZW4oZmFsc2UpfVxuICAgICAgICBjc3M9e1tcbiAgICAgICAgICB0d2BpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICAgIHRoZW1lLm5hdmJhci5jbG9zZS5iYXNlLFxuICAgICAgICAgIHRoZW1lLm5hdmJhci5jbG9zZS5iZyxcbiAgICAgICAgICB0aGVtZS5uYXZiYXIuY2xvc2UuZm9jdXMsXG4gICAgICAgIF19XG4gICAgICAgIGNsYXNzTmFtZT1cIlwiXG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj57c3JPbmx5fTwvc3Bhbj5cbiAgICAgICAgey8qIDwhLS0gSGVyb2ljb24gbmFtZTogeCAtLT4gKi99XG4gICAgICAgIDxDbG9zZVN2ZyBjc3M9e1t0aGVtZS5uYXZiYXIuY2xvc2UuY29sb3IsIHRoZW1lLm5hdmJhci5jbG9zZS5zaXplXX0gLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuQ2xvc2UucHJvcFR5cGVzID0ge1xuICBzZXRNb2JpbGVNZW51T3BlbjogUHJvcFR5cGVzLmZ1bmMsXG4gIHNyT25seTogUHJvcFR5cGVzLnN0cmluZyxcbiAgd3JhcHBlcjogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENsb3NlO1xuIl19 */"],
      className: "",
      children: [(0, _jsxRuntime.jsx)("span", {
        className: "sr-only",
        children: srOnly
      }), (0, _jsxRuntime.jsx)(CloseSvg, {
        css: [_theme["default"].navbar.close.color, _theme["default"].navbar.close.size, process.env.NODE_ENV === "production" ? "" : ";label:Close;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25hdmJhci9DbG9zZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUJrQiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvQ2xvc2UuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIkAvdGhlbWVzL3RoZW1lXCI7XG5pbXBvcnQgQ2xvc2VTdmcgZnJvbSBcIkAvYXNzZXRzL3N2Zy9oYW1idXJnZXJfX2Nsb3NlLnN2Z1wiO1xuXG5jb25zdCBDbG9zZSA9ICh7XG4gIHNldE1vYmlsZU1lbnVPcGVuLFxuICBzck9ubHkgPSBcIkNsb3NlIE1lbnVcIixcbiAgd3JhcHBlciA9IFwiLW1yLTJcIixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17d3JhcHBlcn0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbGVNZW51T3BlbihmYWxzZSl9XG4gICAgICAgIGNzcz17W1xuICAgICAgICAgIHR3YGlubGluZS1mbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlcmAsXG4gICAgICAgICAgdGhlbWUubmF2YmFyLmNsb3NlLmJhc2UsXG4gICAgICAgICAgdGhlbWUubmF2YmFyLmNsb3NlLmJnLFxuICAgICAgICAgIHRoZW1lLm5hdmJhci5jbG9zZS5mb2N1cyxcbiAgICAgICAgXX1cbiAgICAgICAgY2xhc3NOYW1lPVwiXCJcbiAgICAgID5cbiAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic3Itb25seVwiPntzck9ubHl9PC9zcGFuPlxuICAgICAgICB7LyogPCEtLSBIZXJvaWNvbiBuYW1lOiB4IC0tPiAqL31cbiAgICAgICAgPENsb3NlU3ZnIGNzcz17W3RoZW1lLm5hdmJhci5jbG9zZS5jb2xvciwgdGhlbWUubmF2YmFyLmNsb3NlLnNpemVdfSAvPlxuICAgICAgPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5DbG9zZS5wcm9wVHlwZXMgPSB7XG4gIHNldE1vYmlsZU1lbnVPcGVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgc3JPbmx5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2xvc2U7XG4iXX0= */"]
      })]
    })
  });
};

var _default = Close;
exports["default"] = _default;