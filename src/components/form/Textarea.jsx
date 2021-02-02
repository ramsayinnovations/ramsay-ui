import PropTypes from "prop-types";
import theme from "@/themes/theme";
import Label from "./Label";
import Help from "./Help";
import Error from "./Error";

const Textarea = ({
  classes = {},
  label,
  help,
  id,
  name,
  rows,
  placeholder,
  error,
}) => (
  <div css={[classes.base]}>
    {label && (
      <Label name={name} className={classes.label}>
        {label}
      </Label>
    )}
    <div css={[theme.textarea.textareaWrapper, classes.textareaWrapper]}>
      <textarea
        id={id}
        name={name || id}
        rows={rows || 3}
        css={[theme.textarea.textarea, classes.textarea]}
        placeholder={placeholder}
      ></textarea>
    </div>
    {help && (
      <Help name={name} className={classes.help}>
        {help}
      </Help>
    )}
    {error && (
      <Error name={name} className={classes.error}>
        {error}
      </Error>
    )}
  </div>
);

Textarea.propTypes = {
  classes: PropTypes.shape({
    base: PropTypes.string,
    label: PropTypes.string,
    textareaWrapper: PropTypes.string,
    textarea: PropTypes.string,
    help: PropTypes.string,
    error: PropTypes.string,
  }),
  label: PropTypes.string,
  help: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  rows: PropTypes.number,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Textarea;
