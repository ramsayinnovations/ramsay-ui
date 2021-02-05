import PropTypes from "prop-types";
import theme from "@/themes/theme";

const {
  form: { input },
} = theme;

const InputBase = ({
  className,
  col,
  hasError,
  name,
  placeholder,
  wrapper,
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
        aria-invalid={!!hasError}
        aria-describedby={`${name}-error`}
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
  name: PropTypes.string,
  placeholder: PropTypes.string,
  wrapper: PropTypes.string,
};

export default InputBase;
