import { Transition } from "@tailwindui/react";
import PropTypes from "prop-types";
import theme from "@/themes/theme";

const Mobile = ({ children, className, isMobileMenuOpen }) => (
  <Transition
    show={isMobileMenuOpen}
    enter="duration-200 ease-out"
    enterFrom="opacity-0 scale-95"
    enterTo="opacity-100 scale-100"
    leave="duration-100 ease-in"
    leaveFrom="opacity-100 scale-100"
    leaveTo="opacity-0 scale-95"
  >
    <div css={[theme.navbar.mobile.base, className]}>
      <div css={[theme.navbar.mobile.main]}>
        <div css={[theme.navbar.mobile.wrapper]}>{children}</div>
      </div>
    </div>
  </Transition>
);

Mobile.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  className: PropTypes.string,
  isMobileMenuOpen: PropTypes.string,
};

export default Mobile;
