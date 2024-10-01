import Heading from "../../components/common/Heading";
import WhyMeCard from "../../components/common/WhyMeCard";
import { FaPiggyBank } from "react-icons/fa6";
import { FaToolbox } from "react-icons/fa6";
import { FaClock } from "react-icons/fa6";
import { FaCertificate } from "react-icons/fa6";

export default function WhyMe() {
  return (
    <section className="why-me">
      <div className="why-me__container">
        <Heading size="2" cssClass="why-me__heading">
          Hvorfor velge meg?
        </Heading>
        <div className="why-me__grid">
          <WhyMeCard icon={<FaPiggyBank />} heading="Forutsigbar">
            Fastpris på service og montering av standard varmepumper. Kjøring er
            inkludert i prisen.
          </WhyMeCard>
          <WhyMeCard icon={<FaToolbox />} heading="Allsidig">
            Tar på meg alle typer oppdrag for næring og private, alt fra
            mikrobryggeri til skipsfart.
          </WhyMeCard>
          <WhyMeCard icon={<FaClock />} heading="Fleksibel">
            Kommer hjem til deg også etter arbeidstid, og det uten ekstra
            kostnad.
          </WhyMeCard>
          <WhyMeCard icon={<FaCertificate />} heading="Erfaring">
            Mer enn 20 års erfaring med varmepumper, og 15 års erfaring som
            maskinist off-shore.
          </WhyMeCard>
        </div>
      </div>
    </section>
  );
}
