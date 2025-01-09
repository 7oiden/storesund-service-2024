import PropTypes from "prop-types";
import { HashLink } from "react-router-hash-link";
import { MdArrowForward } from "react-icons/md";

export default function FooterHashLink({ children, to }) {
  return (
    <HashLink to={to} className="footer__link">
      <div>{children}</div>
      <MdArrowForward className="link-icon" />
    </HashLink>
  );
}

FooterHashLink.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string,
};
