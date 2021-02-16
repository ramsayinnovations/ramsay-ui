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
  "bottom": "-1px"
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
    css: ["position:absolute;left:0px;width:100%;overflow:hidden;", bottomClass, invertClass, wrapper, process.env.NODE_ENV === "production" ? "" : ";label:Curve;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Rlc2lnbi9DdXJ2ZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJNIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Rlc2lnbi9DdXJ2ZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCBDdXJ2ZVN2ZyBmcm9tIFwiQC9hc3NldHMvc3ZnL2N1cnZlLnN2Z1wiO1xuaW1wb3J0IEN1cnZlSW52ZXJ0ZWRTdmcgZnJvbSBcIkAvYXNzZXRzL3N2Zy9jdXJ2ZV9pbnZlcnRlZC5zdmdcIjtcblxuY29uc3QgaXNCb3R0b20gPSB0d2AtYm90dG9tLXB4YDtcbmNvbnN0IGlzVG9wID0gdHdgdG9wLTBgO1xuY29uc3QgaXNJbnZlcnRlZCA9IHR3YHRyYW5zZm9ybSByb3RhdGUtMTgwYDtcblxuY29uc3QgQ3VydmUgPSAoeyBib3R0b20sIGludmVydCwgY2xhc3NOYW1lLCB3cmFwcGVyIH0pID0+IHtcbiAgbGV0IGJvdHRvbUNsYXNzID0gYm90dG9tID8gaXNCb3R0b20gOiBpc1RvcDtcblxuICBsZXQgaW52ZXJ0Q2xhc3MgPVxuICAgICghYm90dG9tICYmIGludmVydCkgfHwgKGJvdHRvbSAmJiAhaW52ZXJ0KSA/IGlzSW52ZXJ0ZWQgOiBcIlwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YGFic29sdXRlIGxlZnQtMCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuYCxcbiAgICAgICAgYm90dG9tQ2xhc3MsXG4gICAgICAgIGludmVydENsYXNzLFxuICAgICAgICB3cmFwcGVyLFxuICAgICAgXX1cbiAgICAgIHN0eWxlPXt7IGxpbmVIZWlnaHQ6IDAgfX1cbiAgICA+XG4gICAgICB7aW52ZXJ0ID8gKFxuICAgICAgICA8Q3VydmVJbnZlcnRlZFN2Z1xuICAgICAgICAgIGNzcz17W3R3YHJlbGF0aXZlIGJsb2NrIGZpbGwtY3VycmVudGAsIGNsYXNzTmFtZV19XG4gICAgICAgICAgLy8gc3R5bGU9e3sgd2lkdGg6IFwiY2FsYygxMDAlICsgMS4zcHgpXCIgfX1cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxDdXJ2ZVN2Z1xuICAgICAgICAgIGNzcz17W3R3YHJlbGF0aXZlIGJsb2NrIGZpbGwtY3VycmVudGAsIGNsYXNzTmFtZV19XG4gICAgICAgICAgLy8gc3R5bGU9e3sgd2lkdGg6IFwiY2FsYygxMDAlICsgMS4zcHgpXCIgfX1cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5DdXJ2ZS5wcm9wVHlwZXMgPSB7XG4gIGludmVydDogUHJvcFR5cGVzLmJvb2wsXG4gIGJvdHRvbTogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLmFueSxcbiAgd3JhcHBlcjogUHJvcFR5cGVzLmFueSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnZlO1xuIl19 */"],
    style: {
      lineHeight: 0
    },
    children: invert ? (0, _jsxRuntime.jsx)(CurveInvertedSvg, {
      css: ["position:relative;display:block;fill:currentColor;", className, process.env.NODE_ENV === "production" ? "" : ";label:Curve;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Rlc2lnbi9DdXJ2ZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkJVIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Rlc2lnbi9DdXJ2ZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCBDdXJ2ZVN2ZyBmcm9tIFwiQC9hc3NldHMvc3ZnL2N1cnZlLnN2Z1wiO1xuaW1wb3J0IEN1cnZlSW52ZXJ0ZWRTdmcgZnJvbSBcIkAvYXNzZXRzL3N2Zy9jdXJ2ZV9pbnZlcnRlZC5zdmdcIjtcblxuY29uc3QgaXNCb3R0b20gPSB0d2AtYm90dG9tLXB4YDtcbmNvbnN0IGlzVG9wID0gdHdgdG9wLTBgO1xuY29uc3QgaXNJbnZlcnRlZCA9IHR3YHRyYW5zZm9ybSByb3RhdGUtMTgwYDtcblxuY29uc3QgQ3VydmUgPSAoeyBib3R0b20sIGludmVydCwgY2xhc3NOYW1lLCB3cmFwcGVyIH0pID0+IHtcbiAgbGV0IGJvdHRvbUNsYXNzID0gYm90dG9tID8gaXNCb3R0b20gOiBpc1RvcDtcblxuICBsZXQgaW52ZXJ0Q2xhc3MgPVxuICAgICghYm90dG9tICYmIGludmVydCkgfHwgKGJvdHRvbSAmJiAhaW52ZXJ0KSA/IGlzSW52ZXJ0ZWQgOiBcIlwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YGFic29sdXRlIGxlZnQtMCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuYCxcbiAgICAgICAgYm90dG9tQ2xhc3MsXG4gICAgICAgIGludmVydENsYXNzLFxuICAgICAgICB3cmFwcGVyLFxuICAgICAgXX1cbiAgICAgIHN0eWxlPXt7IGxpbmVIZWlnaHQ6IDAgfX1cbiAgICA+XG4gICAgICB7aW52ZXJ0ID8gKFxuICAgICAgICA8Q3VydmVJbnZlcnRlZFN2Z1xuICAgICAgICAgIGNzcz17W3R3YHJlbGF0aXZlIGJsb2NrIGZpbGwtY3VycmVudGAsIGNsYXNzTmFtZV19XG4gICAgICAgICAgLy8gc3R5bGU9e3sgd2lkdGg6IFwiY2FsYygxMDAlICsgMS4zcHgpXCIgfX1cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxDdXJ2ZVN2Z1xuICAgICAgICAgIGNzcz17W3R3YHJlbGF0aXZlIGJsb2NrIGZpbGwtY3VycmVudGAsIGNsYXNzTmFtZV19XG4gICAgICAgICAgLy8gc3R5bGU9e3sgd2lkdGg6IFwiY2FsYygxMDAlICsgMS4zcHgpXCIgfX1cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5DdXJ2ZS5wcm9wVHlwZXMgPSB7XG4gIGludmVydDogUHJvcFR5cGVzLmJvb2wsXG4gIGJvdHRvbTogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLmFueSxcbiAgd3JhcHBlcjogUHJvcFR5cGVzLmFueSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnZlO1xuIl19 */"] // style={{ width: "calc(100% + 1.3px)" }}
      ,
      style: {
        width: "100%"
      }
    }) : (0, _jsxRuntime.jsx)(CurveSvg, {
      css: ["position:relative;display:block;fill:currentColor;", className, process.env.NODE_ENV === "production" ? "" : ";label:Curve;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Rlc2lnbi9DdXJ2ZS5qc3giXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUNVIiwiZmlsZSI6Ii4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2Rlc2lnbi9DdXJ2ZS5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcbmltcG9ydCBDdXJ2ZVN2ZyBmcm9tIFwiQC9hc3NldHMvc3ZnL2N1cnZlLnN2Z1wiO1xuaW1wb3J0IEN1cnZlSW52ZXJ0ZWRTdmcgZnJvbSBcIkAvYXNzZXRzL3N2Zy9jdXJ2ZV9pbnZlcnRlZC5zdmdcIjtcblxuY29uc3QgaXNCb3R0b20gPSB0d2AtYm90dG9tLXB4YDtcbmNvbnN0IGlzVG9wID0gdHdgdG9wLTBgO1xuY29uc3QgaXNJbnZlcnRlZCA9IHR3YHRyYW5zZm9ybSByb3RhdGUtMTgwYDtcblxuY29uc3QgQ3VydmUgPSAoeyBib3R0b20sIGludmVydCwgY2xhc3NOYW1lLCB3cmFwcGVyIH0pID0+IHtcbiAgbGV0IGJvdHRvbUNsYXNzID0gYm90dG9tID8gaXNCb3R0b20gOiBpc1RvcDtcblxuICBsZXQgaW52ZXJ0Q2xhc3MgPVxuICAgICghYm90dG9tICYmIGludmVydCkgfHwgKGJvdHRvbSAmJiAhaW52ZXJ0KSA/IGlzSW52ZXJ0ZWQgOiBcIlwiO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgY3NzPXtbXG4gICAgICAgIHR3YGFic29sdXRlIGxlZnQtMCB3LWZ1bGwgb3ZlcmZsb3ctaGlkZGVuYCxcbiAgICAgICAgYm90dG9tQ2xhc3MsXG4gICAgICAgIGludmVydENsYXNzLFxuICAgICAgICB3cmFwcGVyLFxuICAgICAgXX1cbiAgICAgIHN0eWxlPXt7IGxpbmVIZWlnaHQ6IDAgfX1cbiAgICA+XG4gICAgICB7aW52ZXJ0ID8gKFxuICAgICAgICA8Q3VydmVJbnZlcnRlZFN2Z1xuICAgICAgICAgIGNzcz17W3R3YHJlbGF0aXZlIGJsb2NrIGZpbGwtY3VycmVudGAsIGNsYXNzTmFtZV19XG4gICAgICAgICAgLy8gc3R5bGU9e3sgd2lkdGg6IFwiY2FsYygxMDAlICsgMS4zcHgpXCIgfX1cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgLz5cbiAgICAgICkgOiAoXG4gICAgICAgIDxDdXJ2ZVN2Z1xuICAgICAgICAgIGNzcz17W3R3YHJlbGF0aXZlIGJsb2NrIGZpbGwtY3VycmVudGAsIGNsYXNzTmFtZV19XG4gICAgICAgICAgLy8gc3R5bGU9e3sgd2lkdGg6IFwiY2FsYygxMDAlICsgMS4zcHgpXCIgfX1cbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5DdXJ2ZS5wcm9wVHlwZXMgPSB7XG4gIGludmVydDogUHJvcFR5cGVzLmJvb2wsXG4gIGJvdHRvbTogUHJvcFR5cGVzLmJvb2wsXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLmFueSxcbiAgd3JhcHBlcjogUHJvcFR5cGVzLmFueSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEN1cnZlO1xuIl19 */"] // style={{ width: "calc(100% + 1.3px)" }}
      ,
      style: {
        width: "100%"
      }
    })
  });
};

var _default = Curve;
exports["default"] = _default;