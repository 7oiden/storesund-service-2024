import Heading from "../../components/common/Heading";
import WhyCard from "../../components/common/WhyCard";
import { FaPiggyBank } from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaCertificate } from "react-icons/fa6";

export default function Why() {
  return (
    <section className="why">
      <div className="why__container">
        <Heading size="2" cssClass="why__heading">
          Hvorfor velge meg?
        </Heading>
        <div className="why__grid">
          <WhyCard icon={<FaPiggyBank />} heading="Forutsigbart">
            Fastpris på service og montering av standard varmepumper. Kjøring er
            inkludert i prisen.
          </WhyCard>
          <WhyCard icon={<FaToolbox />} heading="Allsidig">
            Tar på meg alle typer oppdrag for næring og private, alt fra
            mikrobryggeri til skipsfart.
          </WhyCard>
          <WhyCard icon={<FaClock />} heading="Fleksibel">
            Kommer hjem til deg også etter arbeidstid, og det uten ekstra
            kostnad.
          </WhyCard>
          <WhyCard icon={<FaCertificate />} heading="Erfaring">
            Mer enn 20 års erfaring med varmepumper, og 15 års erfaring som
            maskinist off-shore.
          </WhyCard>
        </div>
      </div>
    </section>
  );
}
