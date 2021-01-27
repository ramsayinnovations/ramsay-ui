import PropTypes from "prop-types";
import theme from "@/themes/theme";

const {
  form: { input },
} = theme;

const InputBase = ({ className, hasError, wrapper, name, placeholder }) => (
  <div className={wrapper}>
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

InputBase.propTypes = {
  children: PropTypes.any,
  className: PropTypes.string,
  hasError: PropTypes.bool,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  wrapper: PropTypes.string,
};

export default InputBase;
