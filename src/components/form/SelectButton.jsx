import { Listbox } from "@headlessui/react";
import theme from "@/themes/theme";
import PropTypes from "prop-types";

const {
  form: { select },
} = theme;

const SelectButton = ({ classes = {}, value, placeholder }) => {
  const shouldRenderPlaceholder = (!value || !value?.length) && placeholder;

  return (
    <Listbox.Button css={[select.button.base, classes?.base]}>
      {shouldRenderPlaceholder && (
        <span css={[select.button.placeholder, classes?.placeholder]}>
          {placeholder}
        </span>
      )}
      {!shouldRenderPlaceholder && (
        <span css={[select.button.value]}>{value}</span>
      )}
      <span css={[select.button.iconWrapper]}>
        <svg
          css={[select.button.icon]}
          viewBox="0 0 20 20"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M7 7l3-3 3 3m0 6l-3 3-3-3"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Listbox.Button>
  );
};

SelectButton.propTypes = {
  classes: PropTypes.shape({
    base: PropTypes.string,
    placeholder: PropTypes.string,
  }),
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

export default SelectButton;
