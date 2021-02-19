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

var select = _theme["default"].form.select;

var SelectOptions = function SelectOptions(_ref) {
  var _ref$classes = _ref.classes,
      classes = _ref$classes === void 0 ? {} : _ref$classes,
      list = _ref.list,
      open = _ref.open;
  return (0, _jsxRuntime.jsx)(_react.Transition, {
    show: open,
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
    css: [select.options.transition, process.env.NODE_ENV === "production" ? "" : ";label:SelectOptions;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vU2VsZWN0T3B0aW9ucy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUkiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZm9ybS9TZWxlY3RPcHRpb25zLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3Rib3gsIFRyYW5zaXRpb24gfSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiQC90aGVtZXMvdGhlbWVcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBTZWxlY3RPcHRpb24gZnJvbSBcIi4vU2VsZWN0T3B0aW9uXCI7XG5cbmNvbnN0IHtcbiAgZm9ybTogeyBzZWxlY3QgfSxcbn0gPSB0aGVtZTtcblxuY29uc3QgU2VsZWN0T3B0aW9ucyA9ICh7IGNsYXNzZXMgPSB7fSwgbGlzdCwgb3BlbiB9KSA9PiAoXG4gIDxUcmFuc2l0aW9uXG4gICAgc2hvdz17b3Blbn1cbiAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi0xMDBcIlxuICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcbiAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcbiAgICBjc3M9e1tzZWxlY3Qub3B0aW9ucy50cmFuc2l0aW9uXX1cbiAgPlxuICAgIDxMaXN0Ym94Lk9wdGlvbnMgc3RhdGljIGNzcz17W3NlbGVjdC5vcHRpb25zLmJhc2VdfT5cbiAgICAgIHtsaXN0Lm1hcCgoZWwsIGluZGV4KSA9PiAoXG4gICAgICAgIDxTZWxlY3RPcHRpb25cbiAgICAgICAgICBjbGFzc2VzPXt7IG9wdGlvbjogY2xhc3Nlcy5vcHRpb24gfX1cbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIGVsPXtlbH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvTGlzdGJveC5PcHRpb25zPlxuICA8L1RyYW5zaXRpb24+XG4pO1xuXG5TZWxlY3RPcHRpb25zLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBvcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pLFxuICBsaXN0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RPcHRpb25zO1xuIl19 */"],
    children: (0, _jsxRuntime.jsx)(_react.Listbox.Options, {
      "static": true,
      css: [select.options.base, process.env.NODE_ENV === "production" ? "" : ";label:SelectOptions;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vU2VsZWN0T3B0aW9ucy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUI0QiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9mb3JtL1NlbGVjdE9wdGlvbnMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGJveCwgVHJhbnNpdGlvbiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAL3RoZW1lcy90aGVtZVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFNlbGVjdE9wdGlvbiBmcm9tIFwiLi9TZWxlY3RPcHRpb25cIjtcblxuY29uc3Qge1xuICBmb3JtOiB7IHNlbGVjdCB9LFxufSA9IHRoZW1lO1xuXG5jb25zdCBTZWxlY3RPcHRpb25zID0gKHsgY2xhc3NlcyA9IHt9LCBsaXN0LCBvcGVuIH0pID0+IChcbiAgPFRyYW5zaXRpb25cbiAgICBzaG93PXtvcGVufVxuICAgIGxlYXZlPVwidHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTEwMFwiXG4gICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxuICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxuICAgIGNzcz17W3NlbGVjdC5vcHRpb25zLnRyYW5zaXRpb25dfVxuICA+XG4gICAgPExpc3Rib3guT3B0aW9ucyBzdGF0aWMgY3NzPXtbc2VsZWN0Lm9wdGlvbnMuYmFzZV19PlxuICAgICAge2xpc3QubWFwKChlbCwgaW5kZXgpID0+IChcbiAgICAgICAgPFNlbGVjdE9wdGlvblxuICAgICAgICAgIGNsYXNzZXM9e3sgb3B0aW9uOiBjbGFzc2VzLm9wdGlvbiB9fVxuICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgZWw9e2VsfVxuICAgICAgICAvPlxuICAgICAgKSl9XG4gICAgPC9MaXN0Ym94Lk9wdGlvbnM+XG4gIDwvVHJhbnNpdGlvbj5cbik7XG5cblNlbGVjdE9wdGlvbnMucHJvcFR5cGVzID0ge1xuICBjbGFzc2VzOiBQcm9wVHlwZXMuc2hhcGUoe1xuICAgIG9wdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgfSksXG4gIGxpc3Q6IFByb3BUeXBlcy5hcnJheU9mKFByb3BUeXBlcy5zdHJpbmcpLFxuICBvcGVuOiBQcm9wVHlwZXMuYm9vbCxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdE9wdGlvbnM7XG4iXX0= */"],
      children: list.map(function (el, index) {
        return (0, _jsxRuntime.jsx)(_SelectOption["default"], {
          classes: {
            option: classes.option
          },
          el: el
        }, index);
      })
    })
  });
};

var _default = SelectOptions;
exports["default"] = _default;