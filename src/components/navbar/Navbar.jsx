import PropTypes from "prop-types";
import tw from "twin.macro";

export const Navbar = ({ children, className, sticky }) => {
  return (
    <div css={[sticky && tw`sticky top-0 z-50`, tw`relative`, className]}>
      {children}
    </div>
  );
};

Navbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  sticky: PropTypes.string,
};

export default Navbar;
