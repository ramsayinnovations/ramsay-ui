"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _theme = _interopRequireDefault(require("../../themes/theme"));

var MobileHeader = function MobileHeader(_ref) {
  var className = _ref.className,
      children = _ref.children;
  return (0, _jsxRuntime.jsx)("div", {
    css: [_theme["default"].navbar.mobileHeader.base, className, process.env.NODE_ENV === "production" ? "" : ";label:MobileHeader;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25hdmJhci9Nb2JpbGVIZWFkZXIuanN4Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlPIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25hdmJhci9Nb2JpbGVIZWFkZXIuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAL3RoZW1lcy90aGVtZVwiO1xuXG5jb25zdCBNb2JpbGVIZWFkZXIgPSAoeyBjbGFzc05hbWUsIGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjc3M9e1t0aGVtZS5uYXZiYXIubW9iaWxlSGVhZGVyLmJhc2UsIGNsYXNzTmFtZV19PntjaGlsZHJlbn08L2Rpdj5cbik7XG5cbk1vYmlsZUhlYWRlci5wcm9wVHlwZXMgPSB7XG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMub25lT2YoW1xuICAgIFByb3BUeXBlcy5zdHJpbmcsXG4gICAgUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIF0pLFxuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBNb2JpbGVIZWFkZXI7XG4iXX0= */"],
    children: children
  });
};

var _default = MobileHeader;
exports["default"] = _default;