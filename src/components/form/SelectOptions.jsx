import { Listbox, Transition } from "@headlessui/react";
import theme from "@/themes/theme";
import PropTypes from "prop-types";
import SelectOption from "./SelectOption";

const {
  form: { select },
} = theme;

const SelectOptions = ({ classes = {}, list, open }) => (
  <Transition
    show={open}
    leave="transition ease-in duration-100"
    leaveFrom="opacity-100"
    leaveTo="opacity-0"
    css={[select.options.transition]}
  >
    <Listbox.Options static css={[select.options.base]}>
      {list.map((el, index) => (
        <SelectOption
          classes={{
            option: classes.option,
            activeOption: classes.activeOption,
            activeValue: classes.activeValue,
            selectedValue: classes.selectedValue,
          }}
          key={index}
          el={el}
        />
      ))}
    </Listbox.Options>
  </Transition>
);

SelectOptions.propTypes = {
  classes: PropTypes.shape({
    option: PropTypes.string,
    activeOption: PropTypes.string,
    activeValue: PropTypes.string,
    selectedValue: PropTypes.string,
  }),
  list: PropTypes.arrayOf(PropTypes.string),
  open: PropTypes.bool,
};

export default SelectOptions;
