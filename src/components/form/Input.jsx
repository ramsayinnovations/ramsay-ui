import PropTypes from "prop-types";

import Error from "./Error";
import Help from "./Help";
import InputBase from "./InputBase";
import Label from "./Label";

const Input = ({
  classes = {},
  error,
  register,
  help,
  label,
  name,
  placeholder,
}) => (
  <div css={classes.base}>
    {label && (
      <Label name={name} className={classes.label}>
        {label}
      </Label>
    )}
    <InputBase
      className={classes.input}
      wrapper={classes.wrapper}
      hasError={!!error}
      name={name}
      register={register}
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

Input.propTypes = {
  classes: PropTypes.shape({
    base: PropTypes.string,
    error: PropTypes.string,
    help: PropTypes.string,
    input: PropTypes.string,
    label: PropTypes.string,
    wrapper: PropTypes.string,
  }),
  error: PropTypes.string,
  register: PropTypes.any,
  help: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default Input;
