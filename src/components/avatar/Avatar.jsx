import PropTypes from "prop-types";
import theme from "@/themes/theme";

const Avatar = ({ className, src, alt, shape, size }) => (
  <img
    css={[
      theme.avatar.default.base,
      shape && theme.avatar.default.shape[shape],
      size && theme.avatar.default.size[size],
      className,
    ]}
    src={src}
    alt={alt || ""}
  />
);

Avatar.propTypes = {
  className: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  shape: PropTypes.oneOf(["pill", "rounded"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg", "xl"]),
};

export default Avatar;
