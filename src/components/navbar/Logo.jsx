import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import tw from "twin.macro";

const Logo = ({ href, srName, src, alt, width, height, className }) => {
  return (
    <Link href={href ? href : "/"}>
      <a className={[className, tw`ml-0`]}>
        <span className="sr-only">{srName}</span>
        <Image
          className="w-auto h-8 sm:h-10"
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </a>
    </Link>
  );
};

Logo.propTypes = {
  href: PropTypes.string,
  srName: PropTypes.string,
  src: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

export default Logo;
