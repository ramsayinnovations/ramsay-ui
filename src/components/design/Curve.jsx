import PropTypes from "prop-types";

const curves = {
  top: "/img/curve__contact--top.svg",
  footer: "/img/curve__footer--top.svg",
  bottom: "/img/curve__contact--bottom.svg",
  "mobile-lower": "/img/curve__cta--lower-sm.svg",
};

export const Curve = ({ classes, type }) => (
  <div className={classes.wrapper}>
    <img className={classes.img} src={curves[type]} />
  </div>
);

Curve.propTypes = {
  classes: PropTypes.shape({
    wrapper: PropTypes.string,
    img: PropTypes.string,
  }),
  type: PropTypes.oneOf(["top", "footer", "bottom", "mobile-lower"]).isRequired,
};

export default Curve;
