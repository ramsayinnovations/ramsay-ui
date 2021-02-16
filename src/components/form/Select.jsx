import PropTypes from "prop-types";
import { Listbox } from "@headlessui/react";
import theme from "@/themes/theme";
import Label from "./Label";
import SelectButton from "./SelectButton";
import SelectOptions from "./SelectOptions";

const {
  form: { select },
} = theme;

const Select = ({ classes = {}, id, label, list, name, value, register }) => (
  <div css={[select.base, classes.base]}>
    <Listbox
      ref={register}
      id={id}
      name={name | id}
      as="div"
      css={[select.listBox]}
      value={value}
      register={register}
    >
      {({ open }) => (
        <>
          <Label name={name} className={classes.label}>
            {label}
          </Label>
          <div css={[select.main]}>
            <span css={[select.buttonWrapper]}>
              <SelectButton value={value} className={classes.button} />
            </span>
            <SelectOptions open={open} list={list} />
          </div>
        </>
      )}
    </Listbox>
  </div>
);

Select.propTypes = {
  classes: PropTypes.shape({
    base: PropTypes.string,
    label: PropTypes.string,
    button: PropTypes.string,
  }),
  id: PropTypes.string,
  label: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  register: PropTypes.any,
};

export default Select;
