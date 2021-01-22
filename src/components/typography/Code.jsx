import PropTypes from "prop-types";
import theme from "@/themes/theme";
import styled from "styled-components";

const code = theme.typography.code;

const Code = styled.div(({ className }) => [
  code.default.base,
  code.default.color,
  code.default.size,
  className,
]);

Code.propTypes = {
  className: PropTypes.any,
};

export default Code;
