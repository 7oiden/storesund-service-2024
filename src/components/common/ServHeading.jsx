import PropTypes from "prop-types";

export default function ServHeading({ icon, price, children }) {
  return (
    <div className="serv-heading">
      <div className="serv-heading__icon">{icon}</div>
      <div>
        <p className="serv-heading__text">{children}</p>
        <p className="serv-heading__price">{price}</p>
      </div>
    </div>
  );
}

ServHeading.propTypes = {
  icon: PropTypes.node.isRequired,
  price: PropTypes.string,
  children: PropTypes.string.isRequired,
};
