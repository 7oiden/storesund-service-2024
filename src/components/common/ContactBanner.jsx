import ContactBannerLink from "./ContactBannerLink";
import { FaSquarePhone } from "react-icons/fa6";
import { FaSquareEnvelope } from "react-icons/fa6";

export default function ContactBanner() {
  return (
    <section className="contact-banner">
      <div className="contact-banner__container">
        <ContactBannerLink to="tel:+4790659303" icon={<FaSquarePhone />}>
          90659303
        </ContactBannerLink>
        <ContactBannerLink
          to="mailto:hugo.storesund@gmail.com"
          icon={<FaSquareEnvelope />}
        >
          hugo.storesund@gmail.com
        </ContactBannerLink>
      </div>
    </section>
  );
}
