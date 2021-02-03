import PropTypes from "prop-types";
import theme from "@/themes/theme";

const Card = ({ children, className, divide }) => (
  <div
    css={[
      theme.card.default.base,
      divide && theme.card.default.divide,
      className,
    ]}
  >
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  className: PropTypes.string,
  divide: PropTypes.bool,
};

export default Card;
