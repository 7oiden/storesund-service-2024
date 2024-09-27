import PropTypes from "prop-types";
import Heading from "./Heading";
import { Link } from "react-router-dom";

export default function Card({ to, icon, heading, children }) {
  return (
    <Link to={to} className="card">
      <div className="card__icon">{icon}</div>
      <Heading size="4" cssClass="card__heading">
        {heading}
      </Heading>
      <p className="card__text">{children}</p>
    </Link>
  );
}

Card.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node,
  heading: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
};
