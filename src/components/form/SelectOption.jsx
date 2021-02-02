import { Listbox } from "@headlessui/react";
import theme from "@/themes/theme";
import PropTypes from "prop-types";

const SelectOption = ({ el }) => (
  <Listbox.Option key={el} value={el}>
    {({ selected, active }) => (
      <div
        css={[
          theme.select.listBox.item.base,
          theme.select.listBox.item.color.default,
          active && theme.select.listBox.item.color.active,
        ]}
      >
        <span
          css={[
            theme.select.listBox.item.value.base,
            theme.select.listBox.item.value.color.default,
            selected && theme.select.listBox.item.value.color.selected,
          ]}
        >
          {el}
        </span>
        {selected && (
          <span
            css={[
              theme.select.listBox.item.selectedValue.base,
              theme.select.listBox.item.selectedValue.default,
              active && theme.select.listBox.item.selectedValue.active,
            ]}
          >
            <svg
              css={[theme.select.listBox.item.selectedValue.svg]}
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
  el: PropTypes.string.isRequired,
};

export default SelectOption;
