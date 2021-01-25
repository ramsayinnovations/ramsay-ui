import PropTypes from "prop-types";
import { styled } from "twin.macro";
import theme from "@/themes/theme";

const Menu = styled.nav(({ className, desktop, mobile }) => [
  desktop && theme.menu.menu.desktop,
  mobile && theme.menu.menu.mobile,
  className,
]);

Menu.propTypes = {
  className: PropTypes.string,
  desktop: PropTypes.string,
  mobile: PropTypes.string,
};

export default Menu;
