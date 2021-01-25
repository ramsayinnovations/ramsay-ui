import PropTypes from "prop-types";
import tw from "twin.macro";

export const Desktop = ({
  padding = tw`px-4 sm:px-6`,
  height = tw`py-4`,
  children,
  className,
  wrapper,
  sticky,
}) => {
  return (
    <div css={[sticky && tw`sticky top-0 z-50`, tw`relative`, wrapper]}>
      <div css={[tw`max-w-7xl mx-auto`, padding]}>
        <div
          css={[
            tw`flex justify-between items-center md:justify-start md:space-x-10`,
            height,
            className,
          ]}
        >
          {children}
        </div>
      </div>
    </div>
  );
};

Desktop.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
  height: PropTypes.string,
  padding: PropTypes.string,
  wrapper: PropTypes.string,
  sticky: PropTypes.string,
};

export default Desktop;
