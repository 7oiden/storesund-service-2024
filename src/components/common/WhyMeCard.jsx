import PropTypes from "prop-types";
import Heading from "./Heading";

export default function WhyMeCard({ icon, heading, children }) {
  return (
    <div className="why-me-card">
      <div className="why-me-card__icon">{icon}</div>
      <Heading size="4" cssClass="why-me-card__heading">
        {heading}
      </Heading>
      <p className="why-me-card__text">{children}</p>
    </div>
  );
}

WhyMeCard.propTypes = {
  icon: PropTypes.node,
  heading: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
