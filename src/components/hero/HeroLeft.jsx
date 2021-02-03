import PropTypes from "prop-types";
import theme from "@/themes/theme";

const HeroLeft = ({ className, children }) => (
  <div css={[theme.hero.leftBlock.default.base, className]}>{children}</div>
);

HeroLeft.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default HeroLeft;
