import PropTypes from "prop-types";

export default function FeedbackHeading({ status, children }) {
  let textClass = `feedback__text feedback__text--${status.toLowerCase()}`;

  return children ? <p className={textClass}>{children}</p> : null;
}

FeedbackHeading.propTypes = {
  status: PropTypes.string.isRequired,
  children: PropTypes.string,
};
