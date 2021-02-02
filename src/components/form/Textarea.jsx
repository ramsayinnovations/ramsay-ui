import PropTypes from "prop-types";
import Label from "./Label";
import Help from "./Help";
import Error from "./Error";
import TextareaBase from "./TextareaBase";

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
  label: PropTypes.string,
  help: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  rows: PropTypes.number,
  error: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Textarea;
