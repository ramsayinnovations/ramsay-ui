import PropTypes from "prop-types";
import theme from "@/themes/theme";

const {
  form: { error },
} = theme;

const Error = ({ children, className, name }) => (
  <p
    css={[error.space, error.color, error.size, className]}
    id={`${name}-error`}
  >
    {children}
  </p>
);

Error.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  name: PropTypes.string,
};

export default Error;
