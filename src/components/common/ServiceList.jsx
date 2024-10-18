import PropTypes from "prop-types";
import Heading from "./Heading";
import ServiceListItem from "./ServiceListItem";

export default function ServiceList({ heading, arr }) {
  return (
    <div className="service-list">
      <div className="service-list__content">
        <Heading size="3" cssClass="service-list__heading">
          {heading}
        </Heading>
        <ul className="service-list__entries">
          {arr.map((item) => (
            <ServiceListItem key={item.id} icon={item.icon} text={item.text} />
          ))}
        </ul>
      </div>
    </div>
  );
}

ServiceList.propTypes = {
  heading: PropTypes.string.isRequired,
  arr: PropTypes.array.isRequired,
};
