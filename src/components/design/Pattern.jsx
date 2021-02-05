import PropTypes from "prop-types";

const patterns = {
  right: "/img/pattern__contact--right.svg",
  "right-curve": "/img/pattern__cta--right.svg",
  left: "/img/pattern__contact--left.svg",
  "left-curve": "/img/pattern__cta--left.svg",
  "mobile-curve": "/img/pattern__cta--right-sm.svg",
};

const Pattern = ({ classes = {}, type }) => (
  <div className={classes.wrapper}>
    <img src={patterns[type]} className={classes.img} />
  </div>
);

Pattern.propTypes = {
  classes: PropTypes.shape({
    wrapper: PropTypes.any,
    img: PropTypes.any,
  }),
  type: PropTypes.oneOf([
    "right",
    "right-curve",
    "left",
    "left-curve",
    "mobile-curve",
  ]).isRequired,
};

export default Pattern;
