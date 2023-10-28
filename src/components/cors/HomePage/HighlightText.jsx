import PropTypes from "prop-types";

const HighlightText = ({ text }) => {
  return <span className="text-blue-300 font-bold">{text}</span>;
};

HighlightText.propTypes = {
  text: PropTypes.string.isRequired,
};
export default HighlightText;
