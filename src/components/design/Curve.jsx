import PropTypes from "prop-types";
import tw from "twin.macro";
import CurveSvg from "@/assets/svg/curve.svg";
import CurveInvertedSvg from "@/assets/svg/curve_inverted.svg";

const isBottom = tw`bottom-0`;
const isTop = tw`top-0`;
const isInverted = tw`transform rotate-180`;

const Curve = ({ bottom, invert, className, wrapper }) => {
  let bottomClass = bottom ? isBottom : isTop;

  let invertClass =
    (!bottom && invert) || (bottom && !invert) ? isInverted : "";

  return (
    <div
      css={[
        tw`absolute left-0 w-full overflow-hidden`,
        bottomClass,
        invertClass,
        wrapper,
      ]}
      style={{ lineHeight: 0 }}
    >
      {invert ? (
        <CurveInvertedSvg
          css={[tw`relative block fill-current`, className]}
          // style={{ width: "calc(100% + 1.3px" }}
        />
      ) : (
        <CurveSvg
          css={[tw`relative block fill-current`, className]}
          // style={{ width: "calc(100% + 1.3px" }}
        />
      )}
    </div>
  );
};

Curve.propTypes = {
  invert: PropTypes.bool,
  bottom: PropTypes.bool,
  className: PropTypes.any,
  wrapper: PropTypes.any,
};

export default Curve;
