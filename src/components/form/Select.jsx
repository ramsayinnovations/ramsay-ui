import PropTypes from "prop-types";
import { Listbox } from "@headlessui/react";
import theme from "@/themes/theme";
import Label from "./Label";
import SelectButton from "./SelectButton";
import SelectOptions from "./SelectOptions";
import Help from "./Help";
import Error from "./Error";

const {
  form: { select },
} = theme;

const Select = ({
  classes = {},
  id,
  label,
  list,
  name,
  value,
  onChange,
  placeholder,
  error,
  help,
}) => (
  <div css={[select.base, classes.base]}>
    <Listbox
      id={id}
      name={name | id}
      as="div"
      css={[select.listBox]}
      value={value}
      onChange={(val) => onChange(val)}
    >
      {({ open }) => (
        <>
          <Label name={name} className={classes.label}>
            {label}
          </Label>
          <div css={[select.main]}>
            <span css={[select.buttonWrapper]}>
              <SelectButton
                value={value}
                classes={{
                  base: classes.button,
                  placeholder: classes.buttonPlaceholder,
                }}
                placeholder={placeholder}
              />
            </span>
            <SelectOptions open={open} list={list} />
          </div>
        </>
      )}
    </Listbox>
    {help && (
      <Help name={name} className={classes.help}>
        {help}
      </Help>
    )}
    {error && (
      <Error name={name} className={classes.error}>
        {error}
      </Error>
    )}
  </div>
);

Select.propTypes = {
  classes: PropTypes.shape({
    base: PropTypes.string,
    label: PropTypes.string,
    buttonPlaceholder: PropTypes.string,
    button: PropTypes.string,
  }),
  id: PropTypes.string,
  label: PropTypes.string,
  list: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string,
  onChange: PropTypes.any,
  value: PropTypes.any,
  placeholder: PropTypes.string,
  help: PropTypes.string,
  error: PropTypes.string,
};

export default Select;
