import PageHero from "../components/common/PageHero";
import ContactBanner from "../components/common/ContactBanner";
import { RiToolsFill } from "react-icons/ri";
import ServHeading from "../components/common/ServHeading";
import ServiceList from "../components/common/ServiceList";
import { repairArray } from "../constants/ServiceListData";

export default function Repair() {
  return (
    <>
      <div className="top-wrapper">
        <PageHero
          title="Reparasjon."
          heading="Hvorfor kjøpe ny varmepumpe når du kan reparere den som du allerede har?"
          image="repair"
        >
          <ul className="page-hero__list">
            <li>
              I mange tilfeller kan et problem med varmepumpen løses med en
              rimelig og enkel reparasjon, i stedet for å måtte bytte ut hele
              anlegget, der man i tillegg til kostnaden for en ny varmepumpe
              også vil få et betydelig utlegg ny montering.
            </li>
            {/* <p>
            Jeg har stort kontaktnett for reservedeler, og vil strekke meg langt
            for å holde reparasjonskostnaden så lav som mulig.
          </p> */}
            <li>
              Dersom reparasjon likevel skulle vise seg å ikke være
              regningssvarende er jeg behjelpelig med en prisgunstig erstatning.
              Jeg har avtale med flere leverandører.
            </li>
            <li>
              Ta kontakt i dag for gratis befaring med feilsøking og
              prisestimat.
            </li>
          </ul>
        </PageHero>
        <ContactBanner />
      </div>
      <section className="service-section">
        <div>
          <ServHeading icon={<RiToolsFill />}>
            Ta kontakt for prisestimat på reparasjon.
          </ServHeading>
          <ServiceList
            heading="Eksempler på type reparasjoner jeg utfører:"
            arr={repairArray}
          />
        </div>
      </section>
    </>
  );
}
