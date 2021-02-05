import PropTypes from "prop-types";

const Pattern = ({ classes = {}, src, alt, width, height, layout }) => {
  return (
    <div css={[classes.wrapper]}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        layout={layout}
        css={[classes.img]}
      />
    </div>
  );
};

Pattern.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  layout: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  classes: PropTypes.shape({
    wrapper: PropTypes.any,
    img: PropTypes.any,
  }),
};

export default Pattern;
