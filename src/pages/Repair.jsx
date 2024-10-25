// import PageHeading from "../components/common/PageHeading";
import PageIntro from "../components/common/PageIntro";
import ContactBanner from "../components/common/ContactBanner";
import { RiToolsFill } from "react-icons/ri";
import ServHeading from "../components/common/ServHeading";
import ServiceList from "../components/common/ServiceList";
import { repairArray } from "../constants/ServiceListData";

export default function Repair() {
  return (
    <>
      <div className="top-wrapper">
        {/* <PageHeading>Reparasjon.</PageHeading> */}
        <PageIntro
          title="Reparasjon."
          heading="Hvorfor kjøpe ny varmepumpe når du kan reparere den som du allerede har?"
          image="repair"
        >
          <p>
            I mange tilfeller kan et problem med varmepumpen løses med en
            rimelig og enkel reparasjon, i stedet for å måtte bytte ut hele
            anlegget, der man i tillegg til kostnaden for en ny varmepumpe også
            vil få et betydelig utlegg ny montering.
          </p>
          <p>
            Jeg har stort kontaktnett for reservedeler, og vil strekke meg langt
            for å holde reparasjonskostnaden så lav som mulig.
          </p>
          <p>
            Dersom reparasjon likevel skulle vise seg å ikke være
            regningssvarende er jeg behjelpelig med en prisgunstig erstatning.
            Jeg har avtale med flere leverandører.
          </p>
          <p>
            Ta kontakt i dag for gratis befaring med feilsøking og prisestimat.
          </p>
        </PageIntro>
        <ContactBanner />
      </div>
      <section className="service-section">
        <ServHeading icon={<RiToolsFill />}>
          Ta kontakt for prisestimat på reparasjon.
        </ServHeading>
        <ServiceList
          heading="Eksempler på type reparasjoner jeg utfører:"
          arr={repairArray}
        />
      </section>
    </>
  );
}
