import PropTypes from "prop-types";

export default function ServHeading({ icon, children }) {
  return (
    <div className="serv-heading">
      <div className="serv-heading__icon">{icon}</div>
      <p className="serv-heading__text">{children}</p>
    </div>
  );
}

ServHeading.propTypes = {
  icon: PropTypes.node.isRequired,
  children: PropTypes.string.isRequired,
};
