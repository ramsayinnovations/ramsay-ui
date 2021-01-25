import PropTypes from "prop-types";
import tw, { styled } from "twin.macro";

const Menu = styled.nav(({ className, desktop, mobile }) => [
  desktop && tw`hidden md:flex space-x-10`,
  mobile && tw`grid gap-y-8`,
  className,
]);

Menu.propTypes = {
  className: PropTypes.string,
  desktop: PropTypes.string,
  mobile: PropTypes.string,
};

export default Menu;
