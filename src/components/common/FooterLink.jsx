import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdArrowForward } from "react-icons/md";

export default function FooterLink({ children, to }) {
  return (
    <Link to={to} className="footer__link">
      <div>{children}</div>
      <MdArrowForward className="link-icon" />
    </Link>
  );
}

FooterLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string,
};
