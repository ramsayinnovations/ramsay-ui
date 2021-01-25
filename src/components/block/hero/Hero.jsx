import PropTypes from "prop-types";
import theme from "@/themes/theme";
import ReactPlayer from "react-player";

const Hero = ({
  className,
  smallText,
  title = {},
  text,
  formTitle,
  buttonText,
  formTipText,
}) => (
  <div css={[theme.hero.default.base, className]}>
    <div css={[theme.hero.default.grid]}>
      <div css={[theme.hero.default.leftBlock.base]}>
        <h1>
          {smallText && (
            <span css={[theme.hero.default.leftBlock.smallTitle]}>
              {smallText}
            </span>
          )}
          <span css={[theme.hero.default.leftBlock.title.base]}>
            <span css={[theme.hero.default.leftBlock.title.first]}>
              {title.first}
            </span>
            <span css={[theme.hero.default.leftBlock.title.second]}>
              {title.second}
            </span>
          </span>
        </h1>
        <p css={[theme.hero.default.leftBlock.text]}>{text}</p>
        <div css={[theme.hero.default.leftBlock.formBlock.base]}>
          <p css={[theme.hero.default.leftBlock.formBlock.title]}>
            {formTitle}
          </p>
          <form
            action="#"
            method="POST"
            css={[theme.hero.default.leftBlock.formBlock.form]}
          >
            <label
              htmlFor="email"
              css={[theme.hero.default.leftBlock.formBlock.label]}
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              css={[theme.hero.default.leftBlock.formBlock.input]}
              placeholder="Enter your email"
            />
            <button
              type="submit"
              css={[theme.hero.default.leftBlock.formBlock.button]}
            >
              {buttonText}
            </button>
          </form>
          {formTipText && (
            <p css={[theme.hero.default.leftBlock.formBlock.tip]}>
              {formTipText}
            </p>
          )}
        </div>
      </div>
      <div css={[theme.hero.default.rightBlock.base]}>
        <div css={[theme.hero.default.rightBlock.videoBlock.base]}>
          <ReactPlayer url="https://www.youtube.com/watch?v=ysz5S6PUM-U" />
        </div>
      </div>
    </div>
  </div>
);

Hero.propTypes = {
  className: PropTypes.string,
  smallText: PropTypes.string,
  title: PropTypes.shape({
    first: PropTypes.string,
    second: PropTypes.string,
  }),
  text: PropTypes.string,
  formTitle: PropTypes.string,
  buttonText: PropTypes.string,
  formTipText: PropTypes.string,
};

export default Hero;
