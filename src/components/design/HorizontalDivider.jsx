import { BsCircle as CircleIcon } from "react-icons/bs";
import PropTypes from "prop-types";

const HorizontalDivider = ({ classes = {} }) => (
  <div css={classes.wrapper}>
    <hr css={classes.lineFirst} />
    <CircleIcon css={classes.icon} />
    <hr css={classes.lineSecond} />
  </div>
);

HorizontalDivider.propTypes = {
  classes: PropTypes.shape({
    wrapper: PropTypes.any,
    icon: PropTypes.any,
    lineFirst: PropTypes.any,
    lineSecond: PropTypes.any,
  }),
};

export default HorizontalDivider;
