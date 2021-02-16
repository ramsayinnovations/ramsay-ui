import PropTypes from "prop-types";
import { Listbox } from "@headlessui/react";
import theme from "@/themes/theme";
import Label from "./Label";
import SelectButton from "./SelectButton";
import SelectOptions from "./SelectOptions";

const {
  form: { select },
} = theme;

const Select = ({ classes = {}, id, label, list, name, value, setValue }) => (
  <div css={[select.base, classes.base]}>
    <Listbox
      id={id}
      name={name | id}
      as="div"
      css={[select.listBox]}
      value={value}
      onChange={(e) => setValue(name, e.target.value)}
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
  setValue: PropTypes.func,
  value: PropTypes.string,
};

export default Select;
