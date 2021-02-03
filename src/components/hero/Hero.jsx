import PropTypes from "prop-types";
import theme from "@/themes/theme";

const Hero = ({ className, children }) => (
  <div css={[theme.hero.default.base, className]}>
    <div css={[theme.hero.default.grid]}>{children}</div>
  </div>
);

Hero.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default Hero;
