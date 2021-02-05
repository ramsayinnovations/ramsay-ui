"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var _react = _interopRequireDefault(require("react"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CurveSvg = function CurveSvg(props) {
  return (0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: (0, _jsxRuntime.jsx)("path", {
      d: "M0 0v8s248 64 600 64 600-64 600-64V0z"
    })
  }));
};

CurveSvg.defaultProps = {
  viewBox: "0 0 1200 120",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};

var CurveInvertedSvg = function CurveInvertedSvg(props) {
  return (0, _jsxRuntime.jsx)("svg", _objectSpread(_objectSpread({}, props), {}, {
    children: (0, _jsxRuntime.jsx)("path", {
      d: "M600 72C248 72 0 8 0 8v112h1200V8S960 72 600 72z"
    })
  }));
};

CurveInvertedSvg.defaultProps = {
  viewBox: "0 0 1200 120",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
var isBottom = {
  "bottom": "0px"
};
var isTop = {
  "top": "0px"
};
var isInverted = {
  "--tw-translate-x": "0",
  "--tw-translate-y": "0",
  "--tw-rotate": "180deg",
  "--tw-skew-x": "0",
  "--tw-skew-y": "0",
  "--tw-scale-x": "1",
  "--tw-scale-y": "1",
  "transform": "translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))"
};

var Curve = function Curve(_ref) {
  var bottom = _ref.bottom,
      invert = _ref.invert,
      className = _ref.className,
      wrapper = _ref.wrapper;
  var bottomClass = bottom ? isBottom : isTop;
  var invertClass = !bottom && invert || bottom && !invert ? isInverted : "";
  return (0, _jsxRuntime.jsx)("div", {
    css: ["position:absolute;left:0px;width:100%;overflow:hidden;", bottomClass, invertClass, wrapper, process.env.NODE_ENV === "production" ? "" : ";label:Curve;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Rlc2lnbi9DdXJ2ZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJNIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Rlc2lnbi9DdXJ2ZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCBDdXJ2ZVN2ZyBmcm9tIFwiQC9hc3NldHMvc3ZnL2N1cnZlLnN2Z1wiO1xuaW1wb3J0IEN1cnZlSW52ZXJ0ZWRTdmcgZnJvbSBcIkAvYXNzZXRzL3N2Zy9jdXJ2ZV9pbnZlcnRlZC5zdmdcIjtcblxuY29uc3QgaXNCb3R0b20gPSB0d2Bib3R0b20tMGA7XG5jb25zdCBpc1RvcCA9IHR3YHRvcC0wYDtcbmNvbnN0IGlzSW52ZXJ0ZWQgPSB0d2B0cmFuc2Zvcm0gcm90YXRlLTE4MGA7XG5cbmNvbnN0IEN1cnZlID0gKHsgYm90dG9tLCBpbnZlcnQsIGNsYXNzTmFtZSwgd3JhcHBlciB9KSA9PiB7XG4gIGxldCBib3R0b21DbGFzcyA9IGJvdHRvbSA/IGlzQm90dG9tIDogaXNUb3A7XG5cbiAgbGV0IGludmVydENsYXNzID1cbiAgICAoIWJvdHRvbSAmJiBpbnZlcnQpIHx8IChib3R0b20gJiYgIWludmVydCkgPyBpc0ludmVydGVkIDogXCJcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17W1xuICAgICAgICB0d2BhYnNvbHV0ZSBsZWZ0LTAgdy1mdWxsIG92ZXJmbG93LWhpZGRlbmAsXG4gICAgICAgIGJvdHRvbUNsYXNzLFxuICAgICAgICBpbnZlcnRDbGFzcyxcbiAgICAgICAgd3JhcHBlcixcbiAgICAgIF19XG4gICAgICBzdHlsZT17eyBsaW5lSGVpZ2h0OiAwIH19XG4gICAgPlxuICAgICAge2ludmVydCA/IChcbiAgICAgICAgPEN1cnZlSW52ZXJ0ZWRTdmdcbiAgICAgICAgICBjc3M9e1t0d2ByZWxhdGl2ZSBibG9jayBmaWxsLWN1cnJlbnRgLCBjbGFzc05hbWVdfVxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcImNhbGMoMTAwJSArIDEuM3B4XCIgfX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxDdXJ2ZVN2Z1xuICAgICAgICAgIGNzcz17W3R3YHJlbGF0aXZlIGJsb2NrIGZpbGwtY3VycmVudGAsIGNsYXNzTmFtZV19XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiY2FsYygxMDAlICsgMS4zcHhcIiB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkN1cnZlLnByb3BUeXBlcyA9IHtcbiAgaW52ZXJ0OiBQcm9wVHlwZXMuYm9vbCxcbiAgYm90dG9tOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuYW55LFxuICB3cmFwcGVyOiBQcm9wVHlwZXMuYW55LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VydmU7XG4iXX0= */"],
    style: {
      lineHeight: 0
    },
    children: invert ? (0, _jsxRuntime.jsx)(CurveInvertedSvg, {
      css: ["position:relative;display:block;fill:currentColor;", className, process.env.NODE_ENV === "production" ? "" : ";label:Curve;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Rlc2lnbi9DdXJ2ZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJVIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Rlc2lnbi9DdXJ2ZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCBDdXJ2ZVN2ZyBmcm9tIFwiQC9hc3NldHMvc3ZnL2N1cnZlLnN2Z1wiO1xuaW1wb3J0IEN1cnZlSW52ZXJ0ZWRTdmcgZnJvbSBcIkAvYXNzZXRzL3N2Zy9jdXJ2ZV9pbnZlcnRlZC5zdmdcIjtcblxuY29uc3QgaXNCb3R0b20gPSB0d2Bib3R0b20tMGA7XG5jb25zdCBpc1RvcCA9IHR3YHRvcC0wYDtcbmNvbnN0IGlzSW52ZXJ0ZWQgPSB0d2B0cmFuc2Zvcm0gcm90YXRlLTE4MGA7XG5cbmNvbnN0IEN1cnZlID0gKHsgYm90dG9tLCBpbnZlcnQsIGNsYXNzTmFtZSwgd3JhcHBlciB9KSA9PiB7XG4gIGxldCBib3R0b21DbGFzcyA9IGJvdHRvbSA/IGlzQm90dG9tIDogaXNUb3A7XG5cbiAgbGV0IGludmVydENsYXNzID1cbiAgICAoIWJvdHRvbSAmJiBpbnZlcnQpIHx8IChib3R0b20gJiYgIWludmVydCkgPyBpc0ludmVydGVkIDogXCJcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17W1xuICAgICAgICB0d2BhYnNvbHV0ZSBsZWZ0LTAgdy1mdWxsIG92ZXJmbG93LWhpZGRlbmAsXG4gICAgICAgIGJvdHRvbUNsYXNzLFxuICAgICAgICBpbnZlcnRDbGFzcyxcbiAgICAgICAgd3JhcHBlcixcbiAgICAgIF19XG4gICAgICBzdHlsZT17eyBsaW5lSGVpZ2h0OiAwIH19XG4gICAgPlxuICAgICAge2ludmVydCA/IChcbiAgICAgICAgPEN1cnZlSW52ZXJ0ZWRTdmdcbiAgICAgICAgICBjc3M9e1t0d2ByZWxhdGl2ZSBibG9jayBmaWxsLWN1cnJlbnRgLCBjbGFzc05hbWVdfVxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcImNhbGMoMTAwJSArIDEuM3B4XCIgfX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxDdXJ2ZVN2Z1xuICAgICAgICAgIGNzcz17W3R3YHJlbGF0aXZlIGJsb2NrIGZpbGwtY3VycmVudGAsIGNsYXNzTmFtZV19XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiY2FsYygxMDAlICsgMS4zcHhcIiB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkN1cnZlLnByb3BUeXBlcyA9IHtcbiAgaW52ZXJ0OiBQcm9wVHlwZXMuYm9vbCxcbiAgYm90dG9tOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuYW55LFxuICB3cmFwcGVyOiBQcm9wVHlwZXMuYW55LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VydmU7XG4iXX0= */"],
      style: {
        width: "calc(100% + 1.3px"
      }
    }) : (0, _jsxRuntime.jsx)(CurveSvg, {
      css: ["position:relative;display:block;fill:currentColor;", className, process.env.NODE_ENV === "production" ? "" : ";label:Curve;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Rlc2lnbi9DdXJ2ZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ0NVIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Rlc2lnbi9DdXJ2ZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCBDdXJ2ZVN2ZyBmcm9tIFwiQC9hc3NldHMvc3ZnL2N1cnZlLnN2Z1wiO1xuaW1wb3J0IEN1cnZlSW52ZXJ0ZWRTdmcgZnJvbSBcIkAvYXNzZXRzL3N2Zy9jdXJ2ZV9pbnZlcnRlZC5zdmdcIjtcblxuY29uc3QgaXNCb3R0b20gPSB0d2Bib3R0b20tMGA7XG5jb25zdCBpc1RvcCA9IHR3YHRvcC0wYDtcbmNvbnN0IGlzSW52ZXJ0ZWQgPSB0d2B0cmFuc2Zvcm0gcm90YXRlLTE4MGA7XG5cbmNvbnN0IEN1cnZlID0gKHsgYm90dG9tLCBpbnZlcnQsIGNsYXNzTmFtZSwgd3JhcHBlciB9KSA9PiB7XG4gIGxldCBib3R0b21DbGFzcyA9IGJvdHRvbSA/IGlzQm90dG9tIDogaXNUb3A7XG5cbiAgbGV0IGludmVydENsYXNzID1cbiAgICAoIWJvdHRvbSAmJiBpbnZlcnQpIHx8IChib3R0b20gJiYgIWludmVydCkgPyBpc0ludmVydGVkIDogXCJcIjtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGNzcz17W1xuICAgICAgICB0d2BhYnNvbHV0ZSBsZWZ0LTAgdy1mdWxsIG92ZXJmbG93LWhpZGRlbmAsXG4gICAgICAgIGJvdHRvbUNsYXNzLFxuICAgICAgICBpbnZlcnRDbGFzcyxcbiAgICAgICAgd3JhcHBlcixcbiAgICAgIF19XG4gICAgICBzdHlsZT17eyBsaW5lSGVpZ2h0OiAwIH19XG4gICAgPlxuICAgICAge2ludmVydCA/IChcbiAgICAgICAgPEN1cnZlSW52ZXJ0ZWRTdmdcbiAgICAgICAgICBjc3M9e1t0d2ByZWxhdGl2ZSBibG9jayBmaWxsLWN1cnJlbnRgLCBjbGFzc05hbWVdfVxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcImNhbGMoMTAwJSArIDEuM3B4XCIgfX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxDdXJ2ZVN2Z1xuICAgICAgICAgIGNzcz17W3R3YHJlbGF0aXZlIGJsb2NrIGZpbGwtY3VycmVudGAsIGNsYXNzTmFtZV19XG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiY2FsYygxMDAlICsgMS4zcHhcIiB9fVxuICAgICAgICAvPlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkN1cnZlLnByb3BUeXBlcyA9IHtcbiAgaW52ZXJ0OiBQcm9wVHlwZXMuYm9vbCxcbiAgYm90dG9tOiBQcm9wVHlwZXMuYm9vbCxcbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuYW55LFxuICB3cmFwcGVyOiBQcm9wVHlwZXMuYW55LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgQ3VydmU7XG4iXX0= */"],
      style: {
        width: "calc(100% + 1.3px"
      }
    })
  });
};

var _default = Curve;
exports["default"] = _default;