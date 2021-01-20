import PropTypes from "prop-types";
import tw from "twin.macro";
import styled from "styled-components";
import button from "@/themes/button";

const Button = styled.button(
  ({ block, border, color, shape, size, className }) => [
    button.default.base,
    button.default.color,
    button.default.hover,
    button.default.focus,
    button.border.base,
    block && tw`w-full`,
    border && button.border[border],
    color && button.color[color],
    shape && button.borderRadius[shape],
    size && button.size[size],
    className,
  ]
);

Button.propTypes = {
  children: PropTypes.string,
  className: PropTypes.any,
  block: PropTypes.string,
  border: PropTypes.oneOf([
    "gray",
    "grey",
    "transparent",
    "primary",
    "success",
    "danger",
  ]),
  color: PropTypes.oneOf(["primary", "success", "danger"]),
  shape: PropTypes.oneOf(["flat", "pill", "rounded"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
};

export default Button;
