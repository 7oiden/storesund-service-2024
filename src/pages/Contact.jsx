// import ContactBanner from "../components/common/ContactBanner";
import Heading from "../components/common/Heading";
import ContactBannerLink from "../components/common/ContactBannerLink";
import { FaSquarePhone } from "react-icons/fa6";
import { FaSquareEnvelope } from "react-icons/fa6";

export default function Contact() {
  return (
    <>
      <div className="top-wrapper2">
        <section className="page-hero">
          <div className="page-hero__container">
            <div className="page-hero__image page-hero__image--contact">
              <form className="contact-form">
                <div className="contact-form__wrapper">
                  <fieldset className="contact-form__fieldset">
                    <div className="contact-form__container">
                      <input
                        className="contact-form__input"
                        placeholder="Navn"
                      />
                      <label className="contact-form__label">Navn</label>
                    </div>
                    <div className="contact-form__container">
                      <input
                        className="contact-form__input"
                        placeholder="E-post"
                      />
                      <label className="contact-form__label">E-post</label>
                    </div>
                    <div className="contact-form__container">
                      <input
                        className="contact-form__input"
                        placeholder="E-post"
                      />
                      <label className="contact-form__label">Telefon</label>
                    </div>
                    <div className="contact-form__container">
                      <textarea
                        className="contact-form__textarea"
                        rows="5"
                        placeholder="Melding"
                      ></textarea>
                      <label className="contact-form__label">Melding</label>
                    </div>
                  </fieldset>
                  <button className="contact-form__button">Send</button>
                </div>
              </form>
            </div>
            <div className="page-hero__content">
              <Heading size="1" cssClass="page-hero__title">
                Kontakt.
              </Heading>
              <div className="page-hero__text">
                <p>
                  For alle typer henvendelser benytt kontaktskjemaet, eller ta
                  direkte kontakt på telefon eller e-post, om du foretrekker
                  det.
                </p>
                <p>
                  Dersom du har spørsmål se gjerne ofte stilte spørsmål. Finner
                  du ikke det du lurer på der, tar du kontakt.
                </p>
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
      {/* <div className="contact">
          <ContactBanner />
        </div> */}
    </>
  );
}
