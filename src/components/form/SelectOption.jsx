import { Listbox } from "@headlessui/react";
import theme from "@/themes/theme";
import PropTypes from "prop-types";

const {
  form: { select },
} = theme;

const SelectOption = ({ classes = {}, el }) => (
  <Listbox.Option key={el} value={el}>
    {({ selected, active }) => (
      <div
        css={[
          select.option.base,
          select.option.color.default,
          active && select.option.color.active,
        ]}
      >
        <span
          css={[
            select.option.value.base,
            select.option.value.color.default,
            selected && select.option.value.color.selected,
            classes?.option,
          ]}
        >
          {el}
        </span>
        {selected && (
          <span
            css={[
              select.option.selectedValue.base,
              select.option.selectedValue.default,
              active && select.option.selectedValue.active,
            ]}
          >
            <svg
              css={[select.option.selectedValue.svg]}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        )}
      </div>
    )}
  </Listbox.Option>
);

SelectOption.propTypes = {
  classes: PropTypes.shape({
    option: PropTypes.string,
  }),
  el: PropTypes.string.isRequired,
};

export default SelectOption;
