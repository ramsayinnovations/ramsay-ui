import theme from "@/themes/theme";
import PropTypes from "prop-types";

const {
  form: { textarea },
} = theme;

const TextareaBase = ({ classes = {}, id, name, placeholder, rows }) => (
  <div css={[textarea.wrapper, classes.wrapper]}>
    <textarea
      id={id}
      name={name || id}
      rows={rows || 3}
      css={[textarea.base, classes.base]}
      placeholder={placeholder}
    ></textarea>
  </div>
);

TextareaBase.propTypes = {
  classes: PropTypes.shape({
    wrapper: PropTypes.string,
    base: PropTypes.string,
  }),
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
};

export default TextareaBase;
