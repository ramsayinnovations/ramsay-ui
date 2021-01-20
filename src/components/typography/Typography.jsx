import PropTypes from "prop-types";
import theme from "@/themes/theme";
import styled from "styled-components";

const Typography = styled.text(({ className, typographyType }) => [
  theme.typography[typographyType]?.default?.base,
  theme.typography[typographyType]?.default?.color,
  theme.typography[typographyType]?.default?.size,
  className,
]);

Typography.propTypes = {
  className: PropTypes.any,
  children: PropTypes.string,
  as: PropTypes.string,
  typographyType: PropTypes.oneOf([
    "title",
    "subtitle",
    "paragraph",
    "text",
    "menu",
    "code",
  ]),
};

export default Typography;
