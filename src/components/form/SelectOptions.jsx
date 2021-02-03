import { Listbox, Transition } from "@headlessui/react";
import theme from "@/themes/theme";
import PropTypes from "prop-types";
import SelectOption from "./SelectOption";

const SelectOptions = ({ list, open }) => (
  <Transition
    show={open}
    leave="transition ease-in duration-100"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    css={[theme.select.options.transition]}
  >
    <Listbox.Options static css={[theme.select.options.base]}>
      {list.map((el, index) => (
        <SelectOption key={index} el={el} />
      ))}
    </Listbox.Options>
  </Transition>
);

SelectOptions.propTypes = {
  list: PropTypes.arrayOf(PropTypes.string),
  open: PropTypes.bool,
};

export default SelectOptions;
