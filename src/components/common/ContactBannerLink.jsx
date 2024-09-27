import { FaSquarePhone } from "react-icons/fa6";
import { FaSquareEnvelope } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function ContactBannerLink() {
  return (
    <div className="contact-banner__container">
      <Link to="tel:+4790659303" className="contact-banner__link">
        <FaSquarePhone className="contact-banner__icon" />
        <div className="contact-banner__icon-bg"></div>
        <div className="contact-banner__text">906 59 303</div>
        <FaChevronRight className="contact-banner__arrow" />
      </Link>
      <Link to="mailto:hugo.storesund@gmail.com" className="contact-banner__link">
        <FaSquareEnvelope className="contact-banner__icon" />
        <div className="contact-banner__icon-bg"></div>
        <div className="contact-banner__text">hugo.storesund@gmail.com</div>
        <FaChevronRight className="contact-banner__arrow" />
      </Link>
    </div>
  );
}
