"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _base = _interopRequireDefault(require("@emotion/styled/base"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _theme = _interopRequireDefault(require("../../themes/theme"));

var Menu = (0, _base["default"])("nav", {
  target: "e6jzg8n0",
  label: "Menu"
})(function (_ref) {
  var className = _ref.className,
      desktop = _ref.desktop,
      mobile = _ref.mobile;
  return [desktop && _theme["default"].menu.menu.desktop, mobile && _theme["default"].menu.menu.mobile, className];
}, process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL21lbnUvTWVudS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSWEiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvbWVudS9NZW51LmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCB7IHN0eWxlZCB9IGZyb20gXCJ0d2luLm1hY3JvXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIkAvdGhlbWVzL3RoZW1lXCI7XG5cbmNvbnN0IE1lbnUgPSBzdHlsZWQubmF2KCh7IGNsYXNzTmFtZSwgZGVza3RvcCwgbW9iaWxlIH0pID0+IFtcbiAgZGVza3RvcCAmJiB0aGVtZS5tZW51Lm1lbnUuZGVza3RvcCxcbiAgbW9iaWxlICYmIHRoZW1lLm1lbnUubWVudS5tb2JpbGUsXG4gIGNsYXNzTmFtZSxcbl0pO1xuXG5NZW51LnByb3BUeXBlcyA9IHtcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBkZXNrdG9wOiBQcm9wVHlwZXMuYm9vbCxcbiAgbW9iaWxlOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE1lbnU7XG4iXX0= */");
Menu.propTypes = {
  className: _propTypes["default"].string,
  desktop: _propTypes["default"].bool,
  mobile: _propTypes["default"].bool
};
var _default = Menu;
exports["default"] = _default;