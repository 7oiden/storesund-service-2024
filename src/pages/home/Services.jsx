import Heading from "../../components/common/Heading";
import ServCard from "../../components/common/ServCard";
import { TbAirConditioning } from "react-icons/tb";
import { RiToolsFill } from "react-icons/ri";
import { PiFanFill } from "react-icons/pi";

export default function Services() {
  return (
    <section className="services">
      <div className="services__container">
        <Heading size="2" cssClass="services__heading">
          Standard tjenester
        </Heading>
        <div className="services__grid">
          <ServCard
            to="installation"
            icon={<TbAirConditioning />}
            heading="Montering"
          >
            Fastpris på <em>kr. 3750,-</em> for standard montasje og
            installasjon av luft-til-luft varmepumper for privatpersoner.
          </ServCard>
          <ServCard to="service" icon={<PiFanFill />} heading="Service">
            Fastpris på <em>kr. 1300,-</em>for standard service på luft-til-luft
            varmepumper opp til 10kW for privatpersoner.
          </ServCard>
          <ServCard to="repair" icon={<RiToolsFill />} heading="Reparasjon">
            Hvorfor kjøpe nytt når du kan reparere den som du allerede har? Har
            stor tilgang på reservedeler.
          </ServCard>
        </div>
      </div>
    </section>
  );
}
