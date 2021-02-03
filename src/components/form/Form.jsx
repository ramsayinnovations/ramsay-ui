import PropTypes from "prop-types";
import theme from "@/themes/theme";

const Form = ({ className, children, id, name, onSubmit, onReset }) => (
  <form
    css={[theme.form.base, className]}
    id={id}
    name={name || id}
    onSubmit={onSubmit}
    onReset={onReset}
  >
    {children}
  </form>
);

Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]).isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
};

export default Form;
