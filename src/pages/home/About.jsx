import aboutImg from "../../assets/images/hugo.jpg";
import Heading from "../../components/common/Heading";

export default function About() {
  return (
    <section className="about">
      <div className="about__container">
        <div className="about__image">
          <img src={aboutImg} alt="Hugo Storesund" />
        </div>
        <div className="about__content">
          <hgroup>
            <Heading size="3" cssClass="about__heading">
              Om meg
            </Heading>
            <Heading size="4" cssClass="about__subheading">
              Mitt navn er Hugo Storesund
            </Heading>
          </hgroup>
          <p>
            Felis libero eget exercitationem enim laborum! Fuga luctus tempora
            deserunt omnis sociosqu. Tristique, wisi ducimus distinctio
            similique. Beatae ipsa tellus. Felis libero eget exercitationem enim
            laborum.
          </p>
          <p>
            Fuga luctus tempora deserunt omnis sociosqu. Tristique, wisi ducimus
            distinctio similique. Beatae ipsa tellus. Justo tortor senectus,
            proident pede scelerisque! Aliqua proin, quisquam! Corrupti?
            Venenatis.
          </p>
        </div>
      </div>
    </section>
  );
}
