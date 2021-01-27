import PropTypes from "prop-types";
import theme from "@/themes/theme";

const Textarea = ({
  classes = {},
  label,
  helpText,
  id,
  name,
  rows,
  placeholder,
}) => (
  <div css={[classes.wrapper]}>
    {label && (
      <label htmlFor={name} css={[theme.textarea.label, classes.label]}>
        {label}
      </label>
    )}
    <div css={[theme.textarea.textareaWrapper, classes.textareaWrapper]}>
      <textarea
        id={id}
        name={name}
        rows={rows || 3}
        css={[theme.textarea.textarea, classes.textarea]}
        placeholder={placeholder}
      ></textarea>
    </div>
    {helpText && (
      <p css={[theme.textarea.helpText, classes.helpText]}>{helpText}</p>
    )}
  </div>
);

Textarea.propTypes = {
  classes: PropTypes.shape({
    wrapper: PropTypes.string,
    label: PropTypes.string,
    textareaWrapper: PropTypes.string,
    textarea: PropTypes.string,
    helpText: PropTypes.string,
  }),
  label: PropTypes.string,
  helpText: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  rows: PropTypes.number,
  placeholder: PropTypes.string,
};

export default Textarea;
