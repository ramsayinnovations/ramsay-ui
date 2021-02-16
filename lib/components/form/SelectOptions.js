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
  var list = _ref.list,
      open = _ref.open;
  return (0, _jsxRuntime.jsx)(_react.Transition, {
    show: open,
    leave: "transition ease-in duration-100",
    leaveFrom: "opacity-100",
    leaveTo: "opacity-0",
    css: [select.options.transition, process.env.NODE_ENV === "production" ? "" : ";label:SelectOptions;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vU2VsZWN0T3B0aW9ucy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZUkiLCJmaWxlIjoiLi4vLi4vLi4vc3JjL2NvbXBvbmVudHMvZm9ybS9TZWxlY3RPcHRpb25zLmpzeCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IExpc3Rib3gsIFRyYW5zaXRpb24gfSBmcm9tIFwiQGhlYWRsZXNzdWkvcmVhY3RcIjtcbmltcG9ydCB0aGVtZSBmcm9tIFwiQC90aGVtZXMvdGhlbWVcIjtcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSBcInByb3AtdHlwZXNcIjtcbmltcG9ydCBTZWxlY3RPcHRpb24gZnJvbSBcIi4vU2VsZWN0T3B0aW9uXCI7XG5cbmNvbnN0IHtcbiAgZm9ybTogeyBzZWxlY3QgfSxcbn0gPSB0aGVtZTtcblxuY29uc3QgU2VsZWN0T3B0aW9ucyA9ICh7IGxpc3QsIG9wZW4gfSkgPT4gKFxuICA8VHJhbnNpdGlvblxuICAgIHNob3c9e29wZW59XG4gICAgbGVhdmU9XCJ0cmFuc2l0aW9uIGVhc2UtaW4gZHVyYXRpb24tMTAwXCJcbiAgICBsZWF2ZUZyb209XCJvcGFjaXR5LTEwMFwiXG4gICAgbGVhdmVUbz1cIm9wYWNpdHktMFwiXG4gICAgY3NzPXtbc2VsZWN0Lm9wdGlvbnMudHJhbnNpdGlvbl19XG4gID5cbiAgICA8TGlzdGJveC5PcHRpb25zIHN0YXRpYyBjc3M9e1tzZWxlY3Qub3B0aW9ucy5iYXNlXX0+XG4gICAgICB7bGlzdC5tYXAoKGVsLCBpbmRleCkgPT4gKFxuICAgICAgICA8U2VsZWN0T3B0aW9uIGtleT17aW5kZXh9IGVsPXtlbH0gLz5cbiAgICAgICkpfVxuICAgIDwvTGlzdGJveC5PcHRpb25zPlxuICA8L1RyYW5zaXRpb24+XG4pO1xuXG5TZWxlY3RPcHRpb25zLnByb3BUeXBlcyA9IHtcbiAgbGlzdDogUHJvcFR5cGVzLmFycmF5T2YoUHJvcFR5cGVzLnN0cmluZyksXG4gIG9wZW46IFByb3BUeXBlcy5ib29sLFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0T3B0aW9ucztcbiJdfQ== */"],
    children: (0, _jsxRuntime.jsx)(_react.Listbox.Options, {
      "static": true,
      css: [select.options.base, process.env.NODE_ENV === "production" ? "" : ";label:SelectOptions;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Zvcm0vU2VsZWN0T3B0aW9ucy5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUI0QiIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9mb3JtL1NlbGVjdE9wdGlvbnMuanN4Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTGlzdGJveCwgVHJhbnNpdGlvbiB9IGZyb20gXCJAaGVhZGxlc3N1aS9yZWFjdFwiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCJAL3RoZW1lcy90aGVtZVwiO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiO1xuaW1wb3J0IFNlbGVjdE9wdGlvbiBmcm9tIFwiLi9TZWxlY3RPcHRpb25cIjtcblxuY29uc3Qge1xuICBmb3JtOiB7IHNlbGVjdCB9LFxufSA9IHRoZW1lO1xuXG5jb25zdCBTZWxlY3RPcHRpb25zID0gKHsgbGlzdCwgb3BlbiB9KSA9PiAoXG4gIDxUcmFuc2l0aW9uXG4gICAgc2hvdz17b3Blbn1cbiAgICBsZWF2ZT1cInRyYW5zaXRpb24gZWFzZS1pbiBkdXJhdGlvbi0xMDBcIlxuICAgIGxlYXZlRnJvbT1cIm9wYWNpdHktMTAwXCJcbiAgICBsZWF2ZVRvPVwib3BhY2l0eS0wXCJcbiAgICBjc3M9e1tzZWxlY3Qub3B0aW9ucy50cmFuc2l0aW9uXX1cbiAgPlxuICAgIDxMaXN0Ym94Lk9wdGlvbnMgc3RhdGljIGNzcz17W3NlbGVjdC5vcHRpb25zLmJhc2VdfT5cbiAgICAgIHtsaXN0Lm1hcCgoZWwsIGluZGV4KSA9PiAoXG4gICAgICAgIDxTZWxlY3RPcHRpb24ga2V5PXtpbmRleH0gZWw9e2VsfSAvPlxuICAgICAgKSl9XG4gICAgPC9MaXN0Ym94Lk9wdGlvbnM+XG4gIDwvVHJhbnNpdGlvbj5cbik7XG5cblNlbGVjdE9wdGlvbnMucHJvcFR5cGVzID0ge1xuICBsaXN0OiBQcm9wVHlwZXMuYXJyYXlPZihQcm9wVHlwZXMuc3RyaW5nKSxcbiAgb3BlbjogUHJvcFR5cGVzLmJvb2wsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBTZWxlY3RPcHRpb25zO1xuIl19 */"],
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