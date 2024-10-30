import classnames from "classnames";
import PropTypes from "prop-types";
import FeedbackIcon from "./FeedbackIcon";
import FeedbackHeading from "./FeedbackHeading";
import FeedbackText from "./FeedbackText";

export default function Feedback({ children, status, heading }) {
  let statusClass = `feedback--${status.toLowerCase()}`;
  const allClasses = classnames("feedback", statusClass);

  return (
    <div className={allClasses}>
      <FeedbackIcon status={status} />
      <FeedbackHeading status={status} heading={heading} />
      <FeedbackText status={status}>{children}</FeedbackText>
    </div>
  );
}

Feedback.propTypes = {
  heading: PropTypes.string.isRequired,
  children: PropTypes.string,
  status: PropTypes.oneOf(["info", "warning", "success", "error"]),
};
