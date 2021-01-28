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
  // I want to create a `col` prop that will output tailwindcss classes to the base div as follows:
  // `col === "1": `col-span-6`
  // `col === "1/2"`: `col-span-6 sm:col-span-3`
  // `col === "1/3"`: `col-span-6 sm:col-span-3 lg:col-span-2`
  // `col === "2/3": `col-span-6 sm:col-span-4`

  // alternative syntax:

  // `col === "full": same as `col === "1"
  // `col === "half": same as `col === "1/2"
  // `col === "third": same as `col === "1/3"
  // `col === "two-thirds": same as `col === "2/3"

  return (
    <div className={[wrapper]}>
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
  col: PropTypes.string,
  hasError: PropTypes.bool,
  wrapper: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
};

export default InputBase;
