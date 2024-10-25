import PropTypes from "prop-types";
import Heading from "./Heading";
import LinkButton from "./LinkButton";

export default function PageIntro({ image, title, heading, children }) {
  const imageClassName = `page-intro__image page-intro__image--${image}`;

  return (
    <section className="page-intro">
      <div className="page-intro__container">
        <div className={imageClassName}>{/* background image*/}</div>
        <div className="page-intro__content">
            <Heading size="1" cssClass="page-intro__title">
              {title}
            </Heading>
            <Heading size="2" cssClass="page-intro__heading">
              {heading}
            </Heading>
          <div className="page-intro__text">{children}</div>
          <div className="hero__cta">
            <LinkButton className="hero__button" to="contact">
              Ta kontakt
            </LinkButton>
          </div>
        </div>
      </div>
    </section>
  );
}

PageIntro.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
