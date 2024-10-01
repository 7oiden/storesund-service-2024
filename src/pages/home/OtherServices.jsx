import Heading from "../../components/common/Heading";
import ServTag from "../../components/common/ServTag";
import img1 from "../../assets/images/pic-11.png";
import img2 from "../../assets/images/pic-22.png";
import img3 from "../../assets/images/pic-55.png";
import img4 from "../../assets/images/pic-66.png";

export default function OtherServices() {
  return (
    <section className="other-services">
      <div className="other-services__container">
        <div className="other-services__content">
          <Heading size="2" cssClass="other-services__heading">
            Andre tjenester
          </Heading>
          <p className="other-services__paragraph">
            Ta kontakt for gunstig pristilbud på montasje, service og reparasjon
            på andre typer anlegg enn luft-til-luft varmepumper:
          </p>
          <div className="other-services__tag-grid">
            <ServTag>Kjøleanlegg</ServTag>
            <ServTag>Fryseanlegg</ServTag>
            <ServTag>Mikrobryggeri</ServTag>
            <ServTag>Skipsfart</ServTag>
            <ServTag>Klimaanlegg</ServTag>
            <ServTag>Kjøretøy</ServTag>
            <ServTag>Air-condition</ServTag>
            <ServTag>Anleggsmaskiner</ServTag>
          </div>
        </div>
        <div className="other-services__img-grid">
          <div>
            <img src={img1} className="other-services__image" />
          </div>
          <div>
            <img src={img2} className="other-services__image" />
          </div>
          <div>
            <img src={img3} className="other-services__image" />
          </div>
          <div>
            <img src={img4} className="other-services__image" />
          </div>
        </div>
      </div>
    </section>
  );
}
