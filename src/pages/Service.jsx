import PageHero from "../components/common/PageHero";
import ContactBanner from "../components/common/ContactBanner";
import ServHeading from "../components/common/ServHeading";
import ServiceList from "../components/common/ServiceList";
import { PiFanFill } from "react-icons/pi";
import { serviceArray } from "../constants/ServiceListData";

export default function Service() {
  return (
    <>
      <div className="top-wrapper">
        <PageHero
          title="Service."
          heading="Sikre lang levetid og optimal energieffektivitet med regelmessig service på din varmepumpe."
          image="service"
        >
          <p>
            En godt vedlikeholdt varmepumpe kan gi deg lavere strømregning ved å
            sørge for at den fungerer mer effektivt. På grunn av oppbygging av
            smuss på lamellene i enheten, kan man oppleve en merkbar reduksjon i
            ytelsen over tid.
          </p>
          <p>
            Regelmessig service bidrar også til å kunne oppdage slitasje og
            potensielle problemer før de blir alvorlige og kostbare å reparere.
          </p>
          <p>
            Generelle anbefalinger er å få utført en service annethvert år, i
            tillegg bør man jevnlig utføre vedlikehold og rengjøring på
            egenhånd.
          </p>
        </PageHero>
        <ContactBanner />
      </div>
      <section className="service-section">
        <ServHeading icon={<PiFanFill />}>
          Fast pris for standard service kr. 1300,- (inkl. mva)
        </ServHeading>
        <ServiceList
          heading="Følgende inngår i en service på luft-til-luft varmepumpe:"
          arr={serviceArray}
        />
      </section>
    </>
  );
}
