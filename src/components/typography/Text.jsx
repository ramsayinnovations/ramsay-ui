import PropTypes from "prop-types";
import theme from "@/themes/theme";
import styled from "styled-components";

const text = theme.typography.text;

const Text = styled.div(({ className, paragraph, link }) => [
  text.default.base,
  text.default.color,
  text.default.size,
  link && text.link.base, // CAN YOU PLEASE MAKE
  link && text.link.color, // THESE THREE LINES
  link && text.link.size, // DRYer?  THANKS.
  paragraph && text.paragraph.base, // CAN YOU PLEASE MAKE
  paragraph && text.paragraph.color, // THESE THREE LINES
  paragraph && text.paragraph.size, // DRYer?  THANKS.
  className,
]);

Text.propTypes = {
  className: PropTypes.any,
  link: PropTypes.string,
  paragraph: PropTypes.string,
};

export default Text;
