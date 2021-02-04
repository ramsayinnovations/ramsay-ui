"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Desktop = void 0;

var _jsxRuntime = require("@emotion/react/jsx-runtime");

var Desktop = function Desktop(_ref) {
  var _ref$padding = _ref.padding,
      padding = _ref$padding === void 0 ? {
    "paddingLeft": "1rem",
    "paddingRight": "1rem",
    "@media (min-width: 640px)": {
      "paddingLeft": "1.5rem",
      "paddingRight": "1.5rem"
    }
  } : _ref$padding,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? {
    "paddingTop": "1rem",
    "paddingBottom": "1rem"
  } : _ref$height,
      children = _ref.children,
      className = _ref.className,
      wrapper = _ref.wrapper,
      sticky = _ref.sticky;
  return (0, _jsxRuntime.jsx)("div", {
    css: [sticky && {
      "position": "sticky",
      "top": "0px",
      "zIndex": "50"
    }, "position:relative;", wrapper, process.env.NODE_ENV === "production" ? "" : ";label:Desktop;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25hdmJhci9EZXNrdG9wLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFZUyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvRGVza3RvcC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuZXhwb3J0IGNvbnN0IERlc2t0b3AgPSAoe1xuICBwYWRkaW5nID0gdHdgcHgtNCBzbTpweC02YCxcbiAgaGVpZ2h0ID0gdHdgcHktNGAsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIHdyYXBwZXIsXG4gIHN0aWNreSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17W3N0aWNreSAmJiB0d2BzdGlja3kgdG9wLTAgei01MGAsIHR3YHJlbGF0aXZlYCwgd3JhcHBlcl19PlxuICAgICAgPGRpdiBjc3M9e1t0d2BtYXgtdy03eGwgbXgtYXV0b2AsIHBhZGRpbmddfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgdHdgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgbWQ6c3BhY2UteC0xMGAsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgXX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkRlc2t0b3AucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhZGRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0aWNreTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlc2t0b3A7XG4iXX0= */"],
    children: (0, _jsxRuntime.jsx)("div", {
      css: ["max-width:80rem;margin-left:auto;margin-right:auto;", padding, process.env.NODE_ENV === "production" ? "" : ";label:Desktop;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25hdmJhci9EZXNrdG9wLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFhVyIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvRGVza3RvcC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuZXhwb3J0IGNvbnN0IERlc2t0b3AgPSAoe1xuICBwYWRkaW5nID0gdHdgcHgtNCBzbTpweC02YCxcbiAgaGVpZ2h0ID0gdHdgcHktNGAsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIHdyYXBwZXIsXG4gIHN0aWNreSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17W3N0aWNreSAmJiB0d2BzdGlja3kgdG9wLTAgei01MGAsIHR3YHJlbGF0aXZlYCwgd3JhcHBlcl19PlxuICAgICAgPGRpdiBjc3M9e1t0d2BtYXgtdy03eGwgbXgtYXV0b2AsIHBhZGRpbmddfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgdHdgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgbWQ6c3BhY2UteC0xMGAsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgXX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkRlc2t0b3AucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhZGRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0aWNreTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlc2t0b3A7XG4iXX0= */"],
      children: (0, _jsxRuntime.jsx)("div", {
        css: ["display:flex;justify-content:space-between;align-items:center;@media (min-width: 768px){justify-content:flex-start;> :not([hidden]) ~ :not([hidden]){--tw-space-x-reverse:0;margin-right:calc(2.5rem * var(--tw-space-x-reverse));margin-left:calc(2.5rem * calc(1 - var(--tw-space-x-reverse)));}}", height, className, process.env.NODE_ENV === "production" ? "" : ";label:Desktop;", process.env.NODE_ENV === "production" ? "" : "/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL25hdmJhci9EZXNrdG9wLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFlVSIsImZpbGUiOiIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9uYXZiYXIvRGVza3RvcC5qc3giLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUHJvcFR5cGVzIGZyb20gXCJwcm9wLXR5cGVzXCI7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuZXhwb3J0IGNvbnN0IERlc2t0b3AgPSAoe1xuICBwYWRkaW5nID0gdHdgcHgtNCBzbTpweC02YCxcbiAgaGVpZ2h0ID0gdHdgcHktNGAsXG4gIGNoaWxkcmVuLFxuICBjbGFzc05hbWUsXG4gIHdyYXBwZXIsXG4gIHN0aWNreSxcbn0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNzcz17W3N0aWNreSAmJiB0d2BzdGlja3kgdG9wLTAgei01MGAsIHR3YHJlbGF0aXZlYCwgd3JhcHBlcl19PlxuICAgICAgPGRpdiBjc3M9e1t0d2BtYXgtdy03eGwgbXgtYXV0b2AsIHBhZGRpbmddfT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNzcz17W1xuICAgICAgICAgICAgdHdgZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIG1kOmp1c3RpZnktc3RhcnQgbWQ6c3BhY2UteC0xMGAsXG4gICAgICAgICAgICBoZWlnaHQsXG4gICAgICAgICAgICBjbGFzc05hbWUsXG4gICAgICAgICAgXX1cbiAgICAgICAgPlxuICAgICAgICAgIHtjaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbkRlc2t0b3AucHJvcFR5cGVzID0ge1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMuc3RyaW5nLFxuICBoZWlnaHQ6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHBhZGRpbmc6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHdyYXBwZXI6IFByb3BUeXBlcy5zdHJpbmcsXG4gIHN0aWNreTogUHJvcFR5cGVzLnN0cmluZyxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IERlc2t0b3A7XG4iXX0= */"],
        children: children
      })
    })
  });
};

exports.Desktop = Desktop;
var _default = Desktop;
exports["default"] = _default;