import PropTypes from "prop-types";
import Heading from "./Heading";
import LinkButton from "./LinkButton";

export default function InfoBox({ heading, image, children, btn }) {
  return (
    <div className="info-box">
      <Heading size="4" cssClass="info-box__heading">
        {heading}
      </Heading>
      <div className="info-box__text">
        {children}
        {btn && <LinkButton to="/contact">Ta kontakt</LinkButton>}
      </div>
      <div className="info-box__image">
        <img src={image} />
      </div>
    </div>
  );
}

InfoBox.propTypes = {
  heading: PropTypes.string.isRequired,
  image: PropTypes.string,
  children: PropTypes.node.isRequired,
  btn: PropTypes.bool.isRequired,
};
