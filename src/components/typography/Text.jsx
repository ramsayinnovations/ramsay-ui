import PropTypes from "prop-types";
import theme from "@/themes/theme";
import styled from "styled-components";

const text = theme.typography.text;

const Text = styled.div(({ className, paragraph, link }) => [
  text.default.base,
  text.default.color,
  text.default.size,
  link && text.link.base,
  link && text.link.color,
  link && text.link.size,
  paragraph && text.paragraph.base,
  paragraph && text.paragraph.color,
  paragraph && text.paragraph.size,
  className,
]);

Text.propTypes = {
  className: PropTypes.any,
  link: PropTypes.bool,
  paragraph: PropTypes.bool,
};

export default Text;
