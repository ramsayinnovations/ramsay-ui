import PropTypes from "prop-types";
import theme from "@/themes/theme";

const Textarea = ({ className, children, id, name, onSubmit, onReset }) => (
  <form
    css={[theme.form.base, className]}
    id={id}
    name={name}
    onSubmit={onSubmit}
    onReset={onReset}
  >
    {children}
  </form>
);

Textarea.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  id: PropTypes.string,
  name: PropTypes.string,
  onSubmit: PropTypes.func,
  onReset: PropTypes.func,
};

export default Textarea;
