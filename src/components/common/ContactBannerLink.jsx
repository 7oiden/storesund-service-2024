import PropTypes from "prop-types";
import { FaChevronRight } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function ContactBannerLink({ to, icon, children }) {
  return (
    <>
      <Link to={to} className="contact-banner__link">
        <div className="contact-banner__icon">{icon}</div>
        <div className="contact-banner__icon-bg"></div>
        <div className="contact-banner__text">{children}</div>
        <FaChevronRight className="contact-banner__arrow" />
      </Link>
    </>
  );
}

ContactBannerLink.propTypes = {
  to: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};
