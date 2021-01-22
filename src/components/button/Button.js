import PropTypes from "prop-types";
import tw from "twin.macro";
import styled from "styled-components";
import theme from "@/themes/theme";

const Button = styled.button(
  ({ block, border, color, shape, size, className }) => [
    theme.button.default.base,
    theme.button.default.color,
    theme.button.default.hover,
    theme.button.default.focus,
    theme.button.border.base,
    block && tw`w-full`,
    border && theme.button.border[border],
    color && theme.button.color[color],
    shape && theme.button.borderRadius[shape],
    size && theme.button.size[size],
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
