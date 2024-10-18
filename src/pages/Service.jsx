import PageHeading from "../components/common/PageHeading";
import PageIntro from "../components/common/PageIntro";
import ContactBanner from "../components/common/ContactBanner";
import image from "../assets/images/pic-55.png";
import ServHeading from "../components/common/ServHeading";
import ServiceList from "../components/common/ServiceList";
import { PiFanFill } from "react-icons/pi";
import { serviceArray } from "../constants/ServiceListData";

export default function Service() {
  return (
    <>
      <PageHeading>Service.</PageHeading>
      <PageIntro
        image={image}
        heading="Sikre lang levetid og optimal energieffektivitet med regelmessig service på din varmepumpe."
      >
        <p>
          En godt vedlikeholdt varmepumpe kan gi deg lavere strømregning ved å
          sørge for at den fungerer mer effektivt. På grunn av oppbygging av
          smuss på lamellene i enheten, kan man oppleve en merkbar reduksjon i
          ytelsen over tid. Regelmessig service bidrar også til å kunne oppdage
          slitasje og potensielle problemer før de blir alvorlige og kostbare å
          reparere.
        </p>
        <p>
          Generelle anbefalinger er å få utført en service annethvert år, i
          tillegg bør man jevnlig utføre vedlikehold og rengjøring på egenhånd.
        </p>
        <p>
          Fast pris på standard service gjelder luft-til-luft varmepumper opp
          til 10kW (større anlegg etter avtale), der utbedring av eventuelle
          feil kommer i tillegg. Ta kontakt i dag for timeavtale.{" "}
        </p>
      </PageIntro>
      <ContactBanner />
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
