import PropTypes from "prop-types";
import theme from "@/themes/theme";

const {
  form: { input },
} = theme;

const InputBase = ({
  className,
  col,
  register,
  hasError,
  name,
  placeholder,
  wrapper,
}) => {
  return (
    <div css={[wrapper, col && input.col[col]]}>
      <input
        ref={register}
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
  register: PropTypes.any,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  wrapper: PropTypes.string,
};

export default InputBase;
