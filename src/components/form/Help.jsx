import PropTypes from "prop-types";
import theme from "@/themes/theme";

const {
  form: { help },
} = theme;

const Help = ({ children, className, name }) => (
  <p css={[help.space, help.color, help.size, className]} id={`${name}-help`}>
    {children}
  </p>
);

Help.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  name: PropTypes.string,
};

export default Help;
