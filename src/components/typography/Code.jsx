import PropTypes from "prop-types";
import typography from "@/themes/typography";
import styled from "styled-components";

const { code } = typography;

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
