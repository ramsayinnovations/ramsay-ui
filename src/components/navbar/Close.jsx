import PropTypes from "prop-types";
import tw from "twin.macro";
import theme from "@/themes/theme";
import CloseSvg from "@/assets/svg/hamburger__close.svg";

const Close = ({
  setMobileMenuOpen,
  srOnly = "Close Menu",
  wrapper = "-mr-2",
}) => {
  return (
    <div className={wrapper}>
      <button
        type="button"
        onClick={() => setMobileMenuOpen(false)}
        css={[
          tw`inline-flex items-center justify-center`,
          theme.navbar.close.base,
          theme.navbar.close.bg,
          theme.navbar.close.focus,
        ]}
        className=""
      >
        <span className="sr-only">{srOnly}</span>
        {/* <!-- Heroicon name: x --> */}
        <CloseSvg css={[theme.navbar.close.color, theme.navbar.close.size]} />
      </button>
    </div>
  );
};

Close.propTypes = {
  setMobileMenuOpen: PropTypes.func,
  srOnly: PropTypes.string,
  wrapper: PropTypes.string,
};

export default Close;
