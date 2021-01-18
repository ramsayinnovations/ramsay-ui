import PropTypes from "prop-types";
import tw from "twin.macro";
import theme from "@/themes/theme";

const Button = ({
  className,
  children,
  styles: { block, color, border, shape, size } = {},
  ...props
}) => {
  return (
    <button
      css={[
        theme.button.default.base,
        theme.button.default.color,
        theme.button.default.hover,
        theme.button.default.focus,
        block && tw`w-full h-full`,
        color && theme.button.color[color],
        border === "gray" && theme.button.border[border],
        shape && theme.button.borderRadius[shape],
        size && theme.button.size[size],
        className,
      ]}
      {...props}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.any,
  children: PropTypes.string,
  styles: PropTypes.shape({
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
  }),
};

export default Button;
