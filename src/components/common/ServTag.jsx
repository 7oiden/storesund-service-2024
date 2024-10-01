import PropTypes from "prop-types";

export default function ServTag({ children }) {
  return (
    <div className="serv-tag">
      <p className="serv-tag__text">{children}</p>
    </div>
  );
}

ServTag.propTypes = {
  children: PropTypes.string.isRequired,
};
