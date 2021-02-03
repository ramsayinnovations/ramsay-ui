import PropTypes from "prop-types";
import theme from "@/themes/theme";

const CardItem = ({ children, className }) => (
  <div css={[theme.card.default.item, className]}>{children}</div>
);

CardItem.propTypes = {
  children: PropTypes.oneOf([
    PropTypes.string,
    PropTypes.arrayOf([PropTypes.string]),
  ]),
  className: PropTypes.string,
};

export default CardItem;
