import PropTypes from "prop-types";
import theme from "@/themes/theme";

const {
  form: { input },
} = theme;

const InputBase = ({
  className,
  col,
  hasError,
  wrapper,
  name,
  placeholder,
}) => {
  return (
    <div className={[wrapper, col && input.col[col]]}>
      <input
        type="text"
        name={name}
        id={name}
        css={[
          input.base,
          input.border,
          input.size,
          input.space,
          input.focus,
          input.error,
          hasError && input.error,
          className,
        ]}
        placeholder={placeholder}
        ariaInvalid={!!hasError}
        ariaDescribedby={`${name}-error`}
      />
    </div>
  );
};

InputBase.propTypes = {
  className: PropTypes.string,
  col: PropTypes.oneOf([
    "full",
    "half",
    "third",
    "twoThirds",
    "1",
    "1/2",
    "1/3",
    "2/3",
  ]),
  hasError: PropTypes.bool,
  wrapper: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputBase;
