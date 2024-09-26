import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";

export default function LinkButton({ children, to }) {
  return (
    <Link to={to} className="link-button">
      {children}
      <FaChevronRight className="link-button-icon" />
    </Link>
  );
}

LinkButton.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string,
};
