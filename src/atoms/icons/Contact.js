import React from "react";
import PropTypes from "prop-types";

import Svg from "../../helpers/Svg";

const ContactIcon = ({ fill }) => (
  <Svg
    title="o-icon__contact"
    viewBox="0 0 10 10"
    className={fill}
    fill="#9b9b9b"
  >
    <path d="M0,0V8H6l4,2V0ZM8,6.76,6.47,6H2V2H8Z" />
  </Svg>
);

ContactIcon.propTypes = {
  fill: PropTypes.string
};

export default ContactIcon;
