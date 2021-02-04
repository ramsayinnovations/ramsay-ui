"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _react = require("@headlessui/react");

var _theme = _interopRequireDefault(require("../../themes/theme"));

var _SelectOption = _interopRequireDefault(require("./SelectOption"));

var SelectOptions = function SelectOptions(_ref) {
  var list = _ref.list,
      open = _ref.open;
  return (0, _jsxRuntime.jsx)(_react.Transition, {
    show: open,
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
    css: [_theme["default"].select.options.transition, process.env.NODE_ENV === "production" ? "" : ";label:SelectOptions;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vU2VsZWN0T3B0aW9ucy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV0kiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZm9ybS9TZWxlY3RPcHRpb25zLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3Rib3gsIFRyYW5zaXRpb24gfSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiQC90aGVtZXMvdGhlbWVcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBTZWxlY3RPcHRpb24gZnJvbSBcIi4vU2VsZWN0T3B0aW9uXCI7XG5cbmNvbnN0IFNlbGVjdE9wdGlvbnMgPSAoeyBsaXN0LCBvcGVuIH0pID0+IChcbiAgPFRyYW5zaXRpb25cbiAgICBzaG93PXtvcGVufVxuICAgIGxlYXZlPVwidHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTEwMFwiXG4gICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxuICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxuICAgIGNzcz17W3RoZW1lLnNlbGVjdC5vcHRpb25zLnRyYW5zaXRpb25dfVxuICA+XG4gICAgPExpc3Rib3guT3B0aW9ucyBzdGF0aWMgY3NzPXtbdGhlbWUuc2VsZWN0Lm9wdGlvbnMuYmFzZV19PlxuICAgICAge2xpc3QubWFwKChlbCwgaW5kZXgpID0+IChcbiAgICAgICAgPFNlbGVjdE9wdGlvbiBrZXk9e2luZGV4fSBlbD17ZWx9IC8+XG4gICAgICApKX1cbiAgICA8L0xpc3Rib3guT3B0aW9ucz5cbiAgPC9UcmFuc2l0aW9uPlxuKTtcblxuU2VsZWN0T3B0aW9ucy5wcm9wVHlwZXMgPSB7XG4gIGxpc3Q6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdE9wdGlvbnM7XG4iXX0= */"],
    children: (0, _jsxRuntime.jsx)(_react.Listbox.Options, {
      "static": true,
      css: [_theme["default"].select.options.base, process.env.NODE_ENV === "production" ? "" : ";label:SelectOptions;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vU2VsZWN0T3B0aW9ucy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBYTRCIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vU2VsZWN0T3B0aW9ucy5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBMaXN0Ym94LCBUcmFuc2l0aW9uIH0gZnJvbSBcIkBoZWFkbGVzc3VpL3JlYWN0XCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIkAvdGhlbWVzL3RoZW1lXCI7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgU2VsZWN0T3B0aW9uIGZyb20gXCIuL1NlbGVjdE9wdGlvblwiO1xuXG5jb25zdCBTZWxlY3RPcHRpb25zID0gKHsgbGlzdCwgb3BlbiB9KSA9PiAoXG4gIDxUcmFuc2l0aW9uXG4gICAgc2hvdz17b3Blbn1cbiAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi0xMDBcIlxuICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcbiAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcbiAgICBjc3M9e1t0aGVtZS5zZWxlY3Qub3B0aW9ucy50cmFuc2l0aW9uXX1cbiAgPlxuICAgIDxMaXN0Ym94Lk9wdGlvbnMgc3RhdGljIGNzcz17W3RoZW1lLnNlbGVjdC5vcHRpb25zLmJhc2VdfT5cbiAgICAgIHtsaXN0Lm1hcCgoZWwsIGluZGV4KSA9PiAoXG4gICAgICAgIDxTZWxlY3RPcHRpb24ga2V5PXtpbmRleH0gZWw9e2VsfSAvPlxuICAgICAgKSl9XG4gICAgPC9MaXN0Ym94Lk9wdGlvbnM+XG4gIDwvVHJhbnNpdGlvbj5cbik7XG5cblNlbGVjdE9wdGlvbnMucHJvcFR5cGVzID0ge1xuICBsaXN0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RPcHRpb25zO1xuIl19 */"],
      children: list.map(function (el, index) {
        return (0, _jsxRuntime.jsx)(_SelectOption["default"], {
          el: el
        }, index);
      })
    })
  });
};

var _default = SelectOptions;
exports["default"] = _default;