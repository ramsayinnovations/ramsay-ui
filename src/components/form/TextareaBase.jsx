import theme from "@/themes/theme";
import PropTypes from "prop-types";

const TextareaBase = ({ id, name, rows, placeholder, classes = {} }) => (
  <div css={[theme.textarea.textareaWrapper, classes.wrapper]}>
    <textarea
      id={id}
      name={name || id}
      rows={rows || 3}
      css={[theme.textarea.textarea, classes.base]}
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
  rows: PropTypes.number,
  placeholder: PropTypes.string,
};

export default TextareaBase;
