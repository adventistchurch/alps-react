import React from "react";
import PropTypes from "prop-types";

const Kicker = ({ text, className }) => (
  <h4 className={`c-media-block__kicker c-block__kicker ${className}`}>
    {text}
  </h4>
);
Kicker.propTypes = {
  text: PropTypes.string.isRequired,
  className: PropTypes.string
};

export default Kicker;
