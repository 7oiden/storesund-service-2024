import PropTypes from "prop-types";

export default function ServiceListItem({ icon, text }) {
  return (
    <li className="service-list__item">
      <div className="list-icon">{icon}</div>
      <span>{text}</span>
    </li>
  );
}

ServiceListItem.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
};
