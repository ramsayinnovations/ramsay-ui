import PropTypes from "prop-types";
import Label from "./Label";
import Help from "./Help";
import Error from "./Error";
import TextareaBase from "./TextareaBase";
import theme from "@/themes/theme";

const Textarea = ({
  classes = {},
  error,
  help,
  id,
  label,
  name,
  placeholder,
  rows,
}) => (
  <div css={[theme.textarea.wrapper, classes.base]}>
    {label && (
      <Label name={name} className={classes.label}>
        {label}
      </Label>
    )}
    <TextareaBase
      classes={classes.textarea}
      name={name}
      id={id}
      rows={rows}
      placeholder={placeholder}
    />
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
    textarea: PropTypes.shape({
      base: PropTypes.string,
      wrapper: PropTypes.string,
    }),
    help: PropTypes.string,
    error: PropTypes.string,
  }),
  error: PropTypes.string,
  help: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  rows: PropTypes.number,
};

export default Textarea;
