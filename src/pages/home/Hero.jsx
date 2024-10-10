import LinkButton from "../../components/common/LinkButton";
// import heroImg from "../../assets/images/hero.jpg";
import Heading from "../../components/common/Heading";
import Badge from "../../components/common/Badge";
import ContactBanner from "../../components/common/ContactBanner";

export default function Hero() {
  return (
    <section className="hero">
      <Badge />
      <div className="hero__container">
        <div className="hero__image"></div>
        <div className="hero__wrapper">
          <div className="hero__content">
            <hgroup>
              <Heading size="1" cssClass="hero__heading">
                Varmepumpe?
              </Heading>
              <Heading size="2" cssClass="hero__subheading">
                Montering, service & reparasjon i <strong>Bergen</strong>
              </Heading>
            </hgroup>
            <p>
              Men ikke bare varmepumper. Jeg tar på meg alle typer oppdrag på
              kulde- og varmeanlegg i Bergen og omegn, både for næring og
              private.
            </p>
            <p>
              Ta kontakt for timeavtale, eller for gratis befaring og
              prisestimat på tjenester som er utenom standard.
            </p>
            <div className="hero__cta">
              <LinkButton to="contact">Ta kontakt</LinkButton>
            </div>
          </div>
          <div className="hero__bg-circle--large"></div>
          <div className="hero__bg-circle--small"></div>
        </div>
        <ContactBanner />
      </div>
    </section>
  );
}
