import PageHero from "../components/common/PageHero";
import ContactBanner from "../components/common/ContactBanner";
import ServHeading from "../components/common/ServHeading";
import ServiceList from "../components/common/ServiceList";
import { PiFanFill } from "react-icons/pi";
import { serviceArray } from "../constants/ServiceListData";
import InfoBox from "../components/common/InfoBox";
import Image1 from "../assets/images/pic-22.png";
import Image2 from "../assets/images/pic-55.png";

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
        <div>
          <ServHeading icon={<PiFanFill />} price="kr. 1300,- (inkl. mva)">
            Fast pris for standard service
          </ServHeading>
          <ServiceList
            heading="Følgende inngår i en service på luft-til-luft varmepumpe:"
            arr={serviceArray}
          />
        </div>
        <InfoBox heading="Serviceavtale" image={Image1} btn={true}>
          <p>
            For å sikre at din varmepumpe får regelmessig service og at det ikke
            går i glemmeboken, kan det være smart å inngå en fast avtale om
            regelmessig service.
          </p>
          <p>
            Jeg tilbyr <em>10% rabatt</em> på de følgende servicene dersom en
            slik avtale blir inngått.
          </p>
        </InfoBox>
        <InfoBox heading="Rengjøring" image={Image2} btn={false}>
          <p>
            En luft-til-luft varmepumpe trenger regelmessig rengjøring. Støvsug
            eller vask filteret, tørk av med en klut og støvsug innedelen før
            filteret settes på plass.
          </p>
          <p>
            Dette må til for å få god luftsirkulasjon og for at varmepumpen skal
            fungere optimalt samt forlenge levetiden.
          </p>
          <p>
            Utedelen trenger også regelmessig tilsyn, se til at ikke støv,
            blader og annet skitt dekker til og hold den fri for snø om
            vinteren.
          </p>
        </InfoBox>
      </section>
    </>
  );
}
