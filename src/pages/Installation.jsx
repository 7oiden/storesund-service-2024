import PageHero from "../components/common/PageHero";
import ContactBanner from "../components/common/ContactBanner";
import { TbAirConditioning } from "react-icons/tb";
import ServHeading from "../components/common/ServHeading";
import ServiceList from "../components/common/ServiceList";
import {
  installationServArray,
  installationPartsArray,
  installationNotIncludedArray,
} from "../constants/ServiceListData";

export default function Installation() {
  return (
    <>
      <div className="top-wrapper">
        <PageHero
          title="Montering."
          heading="Jeg monterer og demonterer alle typer varmepumper, også de du har kjøpt selv."
          image="installation"
        >
          <p>
            Fastpris på standard montasje gjelder luft-til-luft-varmepumpe
            uansett merke i en bolig med trevegg, der det forutsettes god
            atkomst.
          </p>
          <p>
            Kjøring samt nødvendig utstyr for en klar-til-bruk installasjon er
            inkludert i prisen, dette med forbehold om at elektrisk tilkobling
            for utedel er på plass. Se lenger ned på siden for komplett liste
            for hva som er inkludert.
          </p>
          <p>
            Ta kontakt i dag for å bestille time, eller dersom du ønsker
            pristilbud på montasje av andre typer varmepumper, eller anlegg som
            faller utenom det som er definert som standard.{" "}
          </p>
        </PageHero>
        <ContactBanner />
      </div>
      <section className="service-section">
        <ServHeading icon={<TbAirConditioning />}>
          Fast pris for standard montering kr. 3750,- (inkl. mva)
        </ServHeading>
        <ServiceList
          heading="Tjenester som er inkludert i standard montering:"
          arr={installationServArray}
        />
        <ServiceList
          heading="Deler som er inkludert i standard montering:"
          arr={installationPartsArray}
        />
        <ServiceList
          heading="Følgende er ikke inkludert i standard montering:"
          arr={installationNotIncludedArray}
        />
      </section>
    </>
  );
}
