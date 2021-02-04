"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Navbar = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var Navbar = function Navbar(_ref) {
  var children = _ref.children,
      className = _ref.className,
      sticky = _ref.sticky;
  return (0, _jsxRuntime.jsx)("div", {
    css: [sticky && {
      "position": "sticky",
      "top": "0px",
      "zIndex": "50"
    }, "position:relative;", className, process.env.NODE_ENV === "production" ? "" : ";label:Navbar;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25hdmJhci9OYXZiYXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUtTIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25hdmJhci9OYXZiYXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHR3IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5cbmV4cG9ydCBjb25zdCBOYXZiYXIgPSAoeyBjaGlsZHJlbiwgY2xhc3NOYW1lLCBzdGlja3kgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY3NzPXtbc3RpY2t5ICYmIHR3YHN0aWNreSB0b3AtMCB6LTUwYCwgdHdgcmVsYXRpdmVgLCBjbGFzc05hbWVdfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbk5hdmJhci5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0aWNreTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdfQ== */"],
    children: children
  });
};

exports.Navbar = Navbar;
var _default = Navbar;
exports["default"] = _default;