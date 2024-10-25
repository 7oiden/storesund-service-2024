import PropTypes from "prop-types";
import Heading from "./Heading";
import { Link } from "react-router-dom";

export default function ServCard({ to, icon, heading, children }) {
  return (
    <Link to={to} className="serv-card">
      <div className="serv-card__icon">{icon}</div>
      <Heading size="4" cssClass="serv-card__heading">
        {heading}
      </Heading>
      <p className="serv-card__text">{children}</p>
    </Link>
  );
}

ServCard.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
