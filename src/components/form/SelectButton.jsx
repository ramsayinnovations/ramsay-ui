import { Listbox } from "@headlessui/react";
import theme from "@/themes/theme";
import PropTypes from "prop-types";

const {
  form: { select },
} = theme;

const SelectButton = ({ className, value }) => (
  <Listbox.Button css={[select.button.base, className]}>
    <span css={[select.button.value]}>{value}</span>
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

SelectButton.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
};

export default SelectButton;
