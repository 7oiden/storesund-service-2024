// import ContactBanner from "../components/common/ContactBanner";
import Heading from "../components/common/Heading";
import ContactBannerLink from "../components/common/ContactBannerLink";
import ContactForm from "./contact/ContactForm";
import { FaSquarePhone } from "react-icons/fa6";
import { FaSquareEnvelope } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      <div className="top-wrapper2">
        <section className="page-hero">
          <div className="page-hero__container">
            <div className="page-hero__image page-hero__image--contact">
              <ContactForm />
            </div>
            <div className="page-hero__content contact-hero__content">
              <Heading size="1" cssClass="page-hero__title">
                Kontakt.
              </Heading>
              <div className="page-hero__text">
                <ul className="contact-hero__list">
                  <li>
                    For bestilling av time eller andre typer henvendelser benytt
                    kontaktskjemaet, eller ta direkte kontakt på telefon eller
                    e-post.
                  </li>
                  <li>
                    På grunn av arbieid i Nordsjøen kan jeg ikke alltid nås på
                    telefon, men jeg vil være tilgjengelig på e-post og via
                    kontaktskjemaet.
                  </li>
                  <li>
                    Dersom du har spørsmål se gjerne ofte stilte spørsmål.
                    Finner du ikke det du lurer på der er du velkommen til å ta
                    kontakt.
                  </li>
                </ul>
              </div>
              <hr className="contact-hero__divider" />
              <div className="contact-hero__links">
                <ContactBannerLink
                  to="tel:+4790659303"
                  icon={<FaSquarePhone />}
                >
                  {" "}
                  90659303{" "}
                </ContactBannerLink>
                <ContactBannerLink
                  to="mailto:hugo.storesund@gmail.com"
                  icon={<FaSquareEnvelope />}
                >
                  hugo.storesund@gmail.com
                </ContactBannerLink>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
