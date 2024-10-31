import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { ScrollToTop } from "../utils/ScrollToTop";

export default function LinkButton({ children, to }) {
  return (
    <ScrollToTop>
      <Link to={to} className="link-button">
        {children}
        <FaChevronRight className="link-button-icon" />
      </Link>
    </ScrollToTop>
  );
}

LinkButton.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string,
};
