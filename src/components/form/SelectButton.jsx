import { Listbox } from "@headlessui/react";
import theme from "@/themes/theme";
import PropTypes from "prop-types";

const SelectButton = ({ value, className }) => (
  <Listbox.Button css={[theme.select.button.base, className]}>
    <span css={[theme.select.button.value]}>{value}</span>
    <span css={[theme.select.button.iconWrapper]}>
      <svg
        css={[theme.select.button.icon]}
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

SelectButton.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default SelectButton;
