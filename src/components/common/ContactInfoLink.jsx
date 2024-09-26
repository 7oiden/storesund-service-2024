import { FaSquarePhone } from "react-icons/fa6";
import { FaSquareEnvelope } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

import { Link } from "react-router-dom";

export default function ContactInfoLink() {
  return (
    <div className="contact-info__container">
      <Link to="tel:+4790659303" className="contact-info__link">
        <FaSquarePhone className="contact-info__icon" />
        <div className="contact-info__text">906 59 303</div>
        <FaChevronRight className="contact-info__arrow" />
      </Link>
      <Link to="mailto:hugo.storesund@gmail.com" className="contact-info__link">
        <FaSquareEnvelope className="contact-info__icon" />
        <div className="contact-info__text">hugo.storesund@gmail.com</div>
        <FaChevronRight className="contact-info__arrow" />
      </Link>
    </div>
  );
}
