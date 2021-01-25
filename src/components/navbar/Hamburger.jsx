import PropTypes from "prop-types";
import tw from "twin.macro";
import navbar from "@/themes/navbar";
import MenuSvg from "@/assets/svg/hamburger__menu.svg";

const Hamburger = ({
  setMobileMenuOpen,
  srOnly = "Open Menu",
  wrapper = "-mr-2 -my-2 md:hidden",
}) => {
  return (
    <div className={wrapper}>
      <button
        type="button"
        onClick={() => setMobileMenuOpen(true)}
        css={[
          tw`inline-flex items-center justify-center`,
          navbar.hamburger.base,
          navbar.hamburger.bg,
          navbar.hamburger.focus,
        ]}
      >
        <span className="sr-only">{srOnly}</span>
        {/* Heroicon name: menu */}
        <MenuSvg css={[navbar.hamburger.color, navbar.hamburger.size]} />
      </button>
    </div>
  );
};

Hamburger.propTypes = {
  setMobileMenuOpen: PropTypes.func,
  srOnly: PropTypes.string,
  wrapper: PropTypes.string,
};

export default Hamburger;
