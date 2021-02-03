import PropTypes from "prop-types";
import { Listbox } from "@headlessui/react";
import theme from "@/themes/theme";
import Label from "./Label";
import SelectButton from "./SelectButton";
import SelectOptions from "./SelectOptions";

const Select = ({ classes = {}, label, list, onChange, value }) => (
  <div css={[theme.select.base, classes.base]}>
    <Listbox
      as="div"
      css={[theme.select.listBox]}
      value={value}
      onChange={onChange}
    >
      {({ open }) => (
        <>
          <Label name={name} className={classes.label}>
            {label}
          </Label>
          <div css={[theme.select.main]}>
            <span css={[theme.select.buttonWrapper]}>
              <SelectButton value={value} />
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
  }),
  label: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default Select;
