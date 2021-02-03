import PropTypes from "prop-types";
import theme from "@/themes/theme";

const MobileHeader = ({ className, children }) => (
  <div css={[theme.navbar.mobileHeader.base, className]}>{children}</div>
);

MobileHeader.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  className: PropTypes.string,
};

export default MobileHeader;
