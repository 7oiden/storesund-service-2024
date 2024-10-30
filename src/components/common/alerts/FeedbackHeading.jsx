import PropTypes from "prop-types";

export default function FeedbackHeading({ status, heading }) {
  let headingClass = `feedback__heading feedback__heading--${status.toLowerCase()}`;

  return <p className={headingClass}>{heading}</p>;
}

FeedbackHeading.propTypes = {
  status: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
};
