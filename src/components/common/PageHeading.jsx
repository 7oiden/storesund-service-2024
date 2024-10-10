import Heading from "./Heading";
import PropTypes from "prop-types";

export default function PageHeading({ children }) {
  return (
    <div className="page-heading-container">
      <Heading size="1" cssClass="page-heading">
        {children}
      </Heading>
    </div>
  );
}

PageHeading.propTypes = {
  children: PropTypes.string.isRequired,
};
