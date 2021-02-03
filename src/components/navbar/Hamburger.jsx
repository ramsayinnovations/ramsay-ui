import PropTypes from "prop-types";
import tw from "twin.macro";
import theme from "@/themes/theme";
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
          theme.navbar.hamburger.base,
          theme.navbar.hamburger.bg,
          theme.navbar.hamburger.focus,
        ]}
      >
        <span className="sr-only">{srOnly}</span>
        {/* Heroicon name: menu */}
        <MenuSvg
          css={[theme.navbar.hamburger.color, theme.navbar.hamburger.size]}
        />
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
