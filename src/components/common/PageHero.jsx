import PropTypes from "prop-types";
import Heading from "./Heading";
import LinkButton from "./LinkButton";

export default function PageHero({ image, title, heading, children }) {
  const imageClassName = `page-hero__image page-hero__image--${image}`;

  return (
    <section className="page-hero">
      <div className="page-hero__container">
        <div className={imageClassName}>{/* background image*/}</div>
        <div className="page-hero__content">
          <Heading size="1" cssClass="page-hero__title">
            {title}
          </Heading>
          <Heading size="2" cssClass="page-hero__heading">
            {heading}
          </Heading>
          <div className="page-hero__text">{children}</div>
          <div className="hero__cta">
            <LinkButton to="/contact">
              Ta kontakt
            </LinkButton>
          </div>
          {/* <div className="hero__bg-circle--large"></div>
          <div className="hero__bg-circle--small"></div> */}
        </div>
      </div>
    </section>
  );
}

PageHero.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
