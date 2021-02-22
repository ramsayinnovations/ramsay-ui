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
    css: [select.options.transition, process.env.NODE_ENV === "production" ? "" : ";label:SelectOptions;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vU2VsZWN0T3B0aW9ucy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUkiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZm9ybS9TZWxlY3RPcHRpb25zLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3Rib3gsIFRyYW5zaXRpb24gfSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiQC90aGVtZXMvdGhlbWVcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBTZWxlY3RPcHRpb24gZnJvbSBcIi4vU2VsZWN0T3B0aW9uXCI7XG5cbmNvbnN0IHtcbiAgZm9ybTogeyBzZWxlY3QgfSxcbn0gPSB0aGVtZTtcblxuY29uc3QgU2VsZWN0T3B0aW9ucyA9ICh7IGNsYXNzZXMgPSB7fSwgbGlzdCwgb3BlbiB9KSA9PiAoXG4gIDxUcmFuc2l0aW9uXG4gICAgc2hvdz17b3Blbn1cbiAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi0xMDBcIlxuICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcbiAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcbiAgICBjc3M9e1tzZWxlY3Qub3B0aW9ucy50cmFuc2l0aW9uXX1cbiAgPlxuICAgIDxMaXN0Ym94Lk9wdGlvbnMgc3RhdGljIGNzcz17W3NlbGVjdC5vcHRpb25zLmJhc2VdfT5cbiAgICAgIHtsaXN0Lm1hcCgoZWwsIGluZGV4KSA9PiAoXG4gICAgICAgIDxTZWxlY3RPcHRpb25cbiAgICAgICAgICBjbGFzc2VzPXt7XG4gICAgICAgICAgICBvcHRpb246IGNsYXNzZXMub3B0aW9uLFxuICAgICAgICAgICAgYWN0aXZlT3B0aW9uOiBjbGFzc2VzLmFjdGl2ZU9wdGlvbixcbiAgICAgICAgICAgIGFjdGl2ZVZhbHVlOiBjbGFzc2VzLmFjdGl2ZVZhbHVlLFxuICAgICAgICAgICAgc2VsZWN0ZWRWYWx1ZTogY2xhc3Nlcy5zZWxlY3RlZFZhbHVlLFxuICAgICAgICAgIH19XG4gICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICBlbD17ZWx9XG4gICAgICAgIC8+XG4gICAgICApKX1cbiAgICA8L0xpc3Rib3guT3B0aW9ucz5cbiAgPC9UcmFuc2l0aW9uPlxuKTtcblxuU2VsZWN0T3B0aW9ucy5wcm9wVHlwZXMgPSB7XG4gIGNsYXNzZXM6IFByb3BUeXBlcy5zaGFwZSh7XG4gICAgb3B0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZU9wdGlvbjogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBhY3RpdmVWYWx1ZTogUHJvcFR5cGVzLnN0cmluZyxcbiAgICBzZWxlY3RlZFZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICB9KSxcbiAgbGlzdDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0T3B0aW9ucztcbiJdfQ== */"],
    children: (0, _jsxRuntime.jsx)(_react.Listbox.Options, {
      "static": true,
      css: [select.options.base, process.env.NODE_ENV === "production" ? "" : ";label:SelectOptions;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vU2VsZWN0T3B0aW9ucy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUI0QiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9mb3JtL1NlbGVjdE9wdGlvbnMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGJveCwgVHJhbnNpdGlvbiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAL3RoZW1lcy90aGVtZVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFNlbGVjdE9wdGlvbiBmcm9tIFwiLi9TZWxlY3RPcHRpb25cIjtcblxuY29uc3Qge1xuICBmb3JtOiB7IHNlbGVjdCB9LFxufSA9IHRoZW1lO1xuXG5jb25zdCBTZWxlY3RPcHRpb25zID0gKHsgY2xhc3NlcyA9IHt9LCBsaXN0LCBvcGVuIH0pID0+IChcbiAgPFRyYW5zaXRpb25cbiAgICBzaG93PXtvcGVufVxuICAgIGxlYXZlPVwidHJhbnNpdGlvbiBlYXNlLWluIGR1cmF0aW9uLTEwMFwiXG4gICAgbGVhdmVGcm9tPVwib3BhY2l0eS0xMDBcIlxuICAgIGxlYXZlVG89XCJvcGFjaXR5LTBcIlxuICAgIGNzcz17W3NlbGVjdC5vcHRpb25zLnRyYW5zaXRpb25dfVxuICA+XG4gICAgPExpc3Rib3guT3B0aW9ucyBzdGF0aWMgY3NzPXtbc2VsZWN0Lm9wdGlvbnMuYmFzZV19PlxuICAgICAge2xpc3QubWFwKChlbCwgaW5kZXgpID0+IChcbiAgICAgICAgPFNlbGVjdE9wdGlvblxuICAgICAgICAgIGNsYXNzZXM9e3tcbiAgICAgICAgICAgIG9wdGlvbjogY2xhc3Nlcy5vcHRpb24sXG4gICAgICAgICAgICBhY3RpdmVPcHRpb246IGNsYXNzZXMuYWN0aXZlT3B0aW9uLFxuICAgICAgICAgICAgYWN0aXZlVmFsdWU6IGNsYXNzZXMuYWN0aXZlVmFsdWUsXG4gICAgICAgICAgICBzZWxlY3RlZFZhbHVlOiBjbGFzc2VzLnNlbGVjdGVkVmFsdWUsXG4gICAgICAgICAgfX1cbiAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgIGVsPXtlbH1cbiAgICAgICAgLz5cbiAgICAgICkpfVxuICAgIDwvTGlzdGJveC5PcHRpb25zPlxuICA8L1RyYW5zaXRpb24+XG4pO1xuXG5TZWxlY3RPcHRpb25zLnByb3BUeXBlcyA9IHtcbiAgY2xhc3NlczogUHJvcFR5cGVzLnNoYXBlKHtcbiAgICBvcHRpb246IFByb3BUeXBlcy5zdHJpbmcsXG4gICAgYWN0aXZlT3B0aW9uOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIGFjdGl2ZVZhbHVlOiBQcm9wVHlwZXMuc3RyaW5nLFxuICAgIHNlbGVjdGVkVmFsdWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIH0pLFxuICBsaXN0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RPcHRpb25zO1xuIl19 */"],
      children: list.map(function (el, index) {
        return (0, _jsxRuntime.jsx)(_SelectOption["default"], {
          classes: {
            option: classes.option,
            activeOption: classes.activeOption,
            activeValue: classes.activeValue,
            selectedValue: classes.selectedValue
          },
          el: el
        }, index);
      })
    })
  });
};

var _default = SelectOptions;
exports["default"] = _default;