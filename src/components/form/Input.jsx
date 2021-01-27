import PropTypes from "prop-types";
import theme from "@/themes/theme";

const Input = ({
  classes = {},
  labelText,
  placeholder,
  name,
  id,
  helpText,
  helpTextId,
  error,
  errorText,
  errorTextId,
}) => (
  <div css={[classes.wrapper]}>
    {labelText && (
      <label htmlFor={name} css={[theme.input.default.label, classes.label]}>
        {labelText}
      </label>
    )}
    <div css={[theme.input.default.inputWrapper, classes.inputWrapper]}>
      <input
        type="text"
        name={name}
        id={id}
        css={[
          error ? theme.input.default.inputError : theme.input.default.input,
          classes.input,
        ]}
        placeholder={placeholder}
        ariaInvalid={!!error}
      />
      {error && (
        <div css={[theme.input.default.error, classes.error]}>
          {/* <!-- Heroicon name: exclamation-circle --> */}
          <svg
            css={[theme.input.default.errorSvg, classes.errorSvg]}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      )}
    </div>
    {helpText && (
      <p css={[theme.input.default.helpText, classes.helpText]} id={helpTextId}>
        {helpText}
      </p>
    )}
    {errorText && (
      <p
        css={[theme.input.default.errorText, classes.errorText]}
        id={errorTextId}
      >
        {errorText}
      </p>
    )}
  </div>
);

Input.propTypes = {
  classes: PropTypes.shape({
    wrapper: PropTypes.string,
    label: PropTypes.string,
    inputWrapper: PropTypes.string,
    input: PropTypes.string,
    error: PropTypes.string,
    errorSvg: PropTypes.string,
    helpText: PropTypes.string,
    errorText: PropTypes.string,
  }),
  labelText: PropTypes.string,
  placeholder: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  helpText: PropTypes.string,
  helpTextId: PropTypes.string,
  error: PropTypes.string,
  errorText: PropTypes.string,
  errorTextId: PropTypes.string,
};

export default Input;
