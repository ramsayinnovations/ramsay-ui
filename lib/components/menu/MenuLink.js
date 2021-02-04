"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _link = _interopRequireDefault(require("next/link"));

var _theme = _interopRequireDefault(require("../../themes/theme"));

var MenuLink = function MenuLink(_ref) {
  var children = _ref.children,
      href = _ref.href,
      className = _ref.className;
  return (0, _jsxRuntime.jsx)(_link["default"], {
    href: href,
    children: (0, _jsxRuntime.jsx)("a", {
      css: [_theme["default"].menu.link.base, _theme["default"].menu.link.color, className, process.env.NODE_ENV === "production" ? "" : ";label:MenuLink;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21lbnUvTWVudUxpbmsuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU1PIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21lbnUvTWVudUxpbmsuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAL3RoZW1lcy90aGVtZVwiO1xuXG5jb25zdCBNZW51TGluayA9ICh7IGNoaWxkcmVuLCBocmVmLCBjbGFzc05hbWUgfSkgPT4gKFxuICA8TGluayBocmVmPXtocmVmfT5cbiAgICA8YSBjc3M9e1t0aGVtZS5tZW51LmxpbmsuYmFzZSwgdGhlbWUubWVudS5saW5rLmNvbG9yLCBjbGFzc05hbWVdfT5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L2E+XG4gIDwvTGluaz5cbik7XG5cbk1lbnVMaW5rLnByb3BUeXBlcyA9IHtcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5zdHJpbmcsXG4gIGhyZWY6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnVMaW5rO1xuIl19 */"],
      children: children
    })
  });
};

var _default = MenuLink;
exports["default"] = _default;