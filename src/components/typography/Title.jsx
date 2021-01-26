import PropTypes from "prop-types";
import theme from "@/themes/theme";
import styled from "styled-components";

const title = theme.typography.title;

const Title = styled.h2(({ className, subtitle }) => [
  title.default.base,
  title.default.color,
  title.default.size,
  subtitle && title.subtitle.base,
  subtitle && title.subtitle.color,
  subtitle && title.subtitle.size,
  className,
]);

Title.propTypes = {
  className: PropTypes.any,
  subtitle: PropTypes.string,
};

export default Title;
