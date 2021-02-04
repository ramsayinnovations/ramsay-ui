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

var MenuSvg = function MenuSvg(props) {
  return (0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: (0, _jsxRuntime.jsx)("path", {
      d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z",
      stroke: "none"
    })
  }));
};

MenuSvg.defaultProps = {
  stroke: "currentColor",
  fill: "currentColor",
  strokeWidth: "0",
  viewBox: "0 0 24 24",
  height: "1em",
  width: "1em",
  xmlns: "http://www.w3.org/2000/svg"
};

var Hamburger = function Hamburger(_ref) {
  var setMobileMenuOpen = _ref.setMobileMenuOpen,
      _ref$srOnly = _ref.srOnly,
      srOnly = _ref$srOnly === void 0 ? "Open Menu" : _ref$srOnly,
      _ref$wrapper = _ref.wrapper,
      wrapper = _ref$wrapper === void 0 ? "-mr-2 -my-2 md:hidden" : _ref$wrapper;
  return (0, _jsxRuntime.jsx)("div", {
    className: wrapper,
    children: (0, _jsxRuntime.jsxs)("button", {
      type: "button",
      onClick: function onClick() {
        return setMobileMenuOpen(true);
      },
      css: ["display:inline-flex;align-items:center;justify-content:center;", _theme["default"].navbar.hamburger.base, _theme["default"].navbar.hamburger.bg, _theme["default"].navbar.hamburger.focus, process.env.NODE_ENV === "production" ? "" : ";label:Hamburger;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25hdmJhci9IYW1idXJnZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWVRIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25hdmJhci9IYW1idXJnZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIkAvdGhlbWVzL3RoZW1lXCI7XG5pbXBvcnQgTWVudVN2ZyBmcm9tIFwiQC9hc3NldHMvc3ZnL2hhbWJ1cmdlcl9fbWVudS5zdmdcIjtcblxuY29uc3QgSGFtYnVyZ2VyID0gKHtcbiAgc2V0TW9iaWxlTWVudU9wZW4sXG4gIHNyT25seSA9IFwiT3BlbiBNZW51XCIsXG4gIHdyYXBwZXIgPSBcIi1tci0yIC1teS0yIG1kOmhpZGRlblwiLFxufSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXt3cmFwcGVyfT5cbiAgICAgIDxidXR0b25cbiAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIG9uQ2xpY2s9eygpID0+IHNldE1vYmlsZU1lbnVPcGVuKHRydWUpfVxuICAgICAgICBjc3M9e1tcbiAgICAgICAgICB0d2BpbmxpbmUtZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJgLFxuICAgICAgICAgIHRoZW1lLm5hdmJhci5oYW1idXJnZXIuYmFzZSxcbiAgICAgICAgICB0aGVtZS5uYXZiYXIuaGFtYnVyZ2VyLmJnLFxuICAgICAgICAgIHRoZW1lLm5hdmJhci5oYW1idXJnZXIuZm9jdXMsXG4gICAgICAgIF19XG4gICAgICA+XG4gICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNyLW9ubHlcIj57c3JPbmx5fTwvc3Bhbj5cbiAgICAgICAgey8qIEhlcm9pY29uIG5hbWU6IG1lbnUgKi99XG4gICAgICAgIDxNZW51U3ZnXG4gICAgICAgICAgY3NzPXtbdGhlbWUubmF2YmFyLmhhbWJ1cmdlci5jb2xvciwgdGhlbWUubmF2YmFyLmhhbWJ1cmdlci5zaXplXX1cbiAgICAgICAgLz5cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuSGFtYnVyZ2VyLnByb3BUeXBlcyA9IHtcbiAgc2V0TW9iaWxlTWVudU9wZW46IFByb3BUeXBlcy5mdW5jLFxuICBzck9ubHk6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXI6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBIYW1idXJnZXI7XG4iXX0= */"],
      children: [(0, _jsxRuntime.jsx)("span", {
        className: "sr-only",
        children: srOnly
      }), (0, _jsxRuntime.jsx)(MenuSvg, {
        css: [_theme["default"].navbar.hamburger.color, _theme["default"].navbar.hamburger.size, process.env.NODE_ENV === "production" ? "" : ";label:Hamburger;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25hdmJhci9IYW1idXJnZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlCVSIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvSGFtYnVyZ2VyLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAL3RoZW1lcy90aGVtZVwiO1xuaW1wb3J0IE1lbnVTdmcgZnJvbSBcIkAvYXNzZXRzL3N2Zy9oYW1idXJnZXJfX21lbnUuc3ZnXCI7XG5cbmNvbnN0IEhhbWJ1cmdlciA9ICh7XG4gIHNldE1vYmlsZU1lbnVPcGVuLFxuICBzck9ubHkgPSBcIk9wZW4gTWVudVwiLFxuICB3cmFwcGVyID0gXCItbXItMiAtbXktMiBtZDpoaWRkZW5cIixcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17d3JhcHBlcn0+XG4gICAgICA8YnV0dG9uXG4gICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRNb2JpbGVNZW51T3Blbih0cnVlKX1cbiAgICAgICAgY3NzPXtbXG4gICAgICAgICAgdHdgaW5saW5lLWZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyYCxcbiAgICAgICAgICB0aGVtZS5uYXZiYXIuaGFtYnVyZ2VyLmJhc2UsXG4gICAgICAgICAgdGhlbWUubmF2YmFyLmhhbWJ1cmdlci5iZyxcbiAgICAgICAgICB0aGVtZS5uYXZiYXIuaGFtYnVyZ2VyLmZvY3VzLFxuICAgICAgICBdfVxuICAgICAgPlxuICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzci1vbmx5XCI+e3NyT25seX08L3NwYW4+XG4gICAgICAgIHsvKiBIZXJvaWNvbiBuYW1lOiBtZW51ICovfVxuICAgICAgICA8TWVudVN2Z1xuICAgICAgICAgIGNzcz17W3RoZW1lLm5hdmJhci5oYW1idXJnZXIuY29sb3IsIHRoZW1lLm5hdmJhci5oYW1idXJnZXIuc2l6ZV19XG4gICAgICAgIC8+XG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkhhbWJ1cmdlci5wcm9wVHlwZXMgPSB7XG4gIHNldE1vYmlsZU1lbnVPcGVuOiBQcm9wVHlwZXMuZnVuYyxcbiAgc3JPbmx5OiBQcm9wVHlwZXMuc3RyaW5nLFxuICB3cmFwcGVyOiBQcm9wVHlwZXMuc3RyaW5nLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgSGFtYnVyZ2VyO1xuIl19 */"]
      })]
    })
  });
};

var _default = Hamburger;
exports["default"] = _default;