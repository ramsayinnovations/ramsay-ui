import Link from "next/link";
import tw from "twin.macro";
import Text from "@/components/typography/Text";

const MenuLink = ({ children, href, className }) => (
  <Link hfre={href}>
    <a
      css={[
        tw`text-base font-medium text-gray-500 hover:text-gray-900`,
        className,
      ]}
    >
      {children}
    </a>
  </Link>
);
