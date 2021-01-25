import PropTypes from "prop-types";
import tw from "twin.macro";
import navbar from "@/themes/navbar";
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
          navbar.close.base,
          navbar.close.bg,
          navbar.close.focus,
        ]}
        className=""
      >
        <span className="sr-only">{srOnly}</span>
        {/* <!-- Heroicon name: x --> */}
        <CloseSvg css={[navbar.close.color, navbar.close.size]} />
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
