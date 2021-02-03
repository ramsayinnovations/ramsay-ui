import PropTypes from "prop-types";
import theme from "@/themes/theme";

const HeroRight = ({ className, children }) => (
  <div css={[theme.hero.rightBlock.default.base, className]}>{children}</div>
);

HeroRight.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default HeroRight;
