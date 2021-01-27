import PropTypes from "prop-types";
import { Listbox, Transition } from "@headlessui/react";
import theme from "@/themes/theme";

const Select = ({ label, value, onChange, list }) => (
  <div css={[theme.select.wrapper]}>
    <Listbox
      as="div"
      css={[theme.select.select]}
      value={value}
      onChange={onChange}
    >
      {({ open }) => (
        <>
          <Listbox.Label id="listbox-label" css={[theme.select.label]}>
            {label}
          </Listbox.Label>
          <div css={[theme.select.main]}>
            <span css={[theme.select.button.wrapper]}>
              <Listbox.Button css={[theme.select.button.base]}>
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
            </span>

            <Transition
              show={open}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              css={[theme.select.transition]}
            >
              <Listbox.Options static css={[theme.select.listBox.base]}>
                {list.map((el) => (
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
                            selected &&
                              theme.select.listBox.item.value.color.selected,
                          ]}
                        >
                          {el}
                        </span>
                        {selected && (
                          <span
                            css={[
                              theme.select.listBox.item.selectedValue.base,
                              theme.select.listBox.item.selectedValue.default,
                              active &&
                                theme.select.listBox.item.selectedValue.active,
                            ]}
                          >
                            <svg
                              css={[
                                theme.select.listBox.item.selectedValue.svg,
                              ]}
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
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  </div>
);

Select.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  list: PropTypes.arrayOf(PropTypes.string),
};

export default Select;
