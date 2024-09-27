import PropTypes from "prop-types";
import Heading from "./Heading";

export default function Card({ icon, heading, children }) {
  return (
    <div className="why-card">
      <div className="why-card__icon">{icon}</div>
      <Heading size="4" cssClass="why-card__heading">
        {heading}
      </Heading>
      <p className="why-card__text">{children}</p>
    </div>
  );
}

Card.propTypes = {
  icon: PropTypes.node,
  heading: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
