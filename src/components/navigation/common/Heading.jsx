import PropTypes from "prop-types";

export default function Heading({ size = "1", cssClass, children }) {
  const VariableHeading = `h${size}`;
  return <VariableHeading className={cssClass}>{children}</VariableHeading>;
}

Heading.propTypes = {
  size: PropTypes.string,
  cssClass: PropTypes.string,
  children: PropTypes.node.isRequired,
};
