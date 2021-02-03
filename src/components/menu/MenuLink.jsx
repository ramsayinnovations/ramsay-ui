import Link from "next/link";
import PropTypes from "prop-types";
import theme from "@/themes/theme";

const MenuLink = ({ children, href, className }) => (
  <Link href={href}>
    <a css={[theme.menu.link.base, theme.menu.link.color, className]}>
      {children}
    </a>
  </Link>
);

MenuLink.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
};

export default MenuLink;
