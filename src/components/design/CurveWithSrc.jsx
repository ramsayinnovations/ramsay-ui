import PropTypes from "prop-types";

const Curve = ({ classes = {}, src, alt, width, height }) => {
  return (
    <div css={[classes.wrapper]} style={{ lineHeight: 0 }}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        css={[classes.img]}
        className={classes.img}
      />
      ;
    </div>
  );
};

Curve.propTypes = {
  alt: PropTypes.string,
  classes: PropTypes.shape({
    wrapper: PropTypes.any,
    img: PropTypes.any,
  }),
  height: PropTypes.number,
  src: PropTypes.string.isRequired,
  width: PropTypes.number,
};

export default Curve;
