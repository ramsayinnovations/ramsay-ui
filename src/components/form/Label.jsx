import PropTypes from "prop-types";
import theme from "@/themes/theme";

const {
  form: { label },
} = theme;

const Label = ({ className, children, name }) => (
  <label htmlFor={name} css={[label.base, label.color, label.size, className]}>
    {children}
  </label>
);

Label.propTypes = {
  className: PropTypes.string,
  children: PropTypes.any,
  name: PropTypes.string,
};

export default Label;
