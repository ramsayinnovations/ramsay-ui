import Link from "next/link";
import Text from "@/components/typography/Text";
import PropTypes from "prop-types";
import theme from "@/themes/theme";

const MenuLink = ({ children, href, className, mobile }) => (
  <Link href={href}>
    <a
      css={[
        theme.menu.link.base,
        theme.menu.link.color,
        mobile && theme.menu.link.mobile,
        className,
      ]}
    >
      <Text>{children}</Text>
    </a>
  </Link>
);

MenuLink.propTypes = {
  children: PropTypes.string,
  href: PropTypes.string,
  className: PropTypes.string,
  mobile: PropTypes.bool,
};

export default MenuLink;
