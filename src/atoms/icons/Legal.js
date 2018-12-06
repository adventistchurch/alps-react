import React from "react";
import PropTypes from "prop-types";

import Svg from "../../helpers/Svg";

const LegalIcon = ({ fill }) => (
  <Svg
    title="o-icon__legal"
    viewBox="0 0 10 10"
    className={fill}
    fill="#231f20"
  >
    <path d="M10,2.31H0V0H10ZM6.36,3.85H0v2.3H6.36ZM8.22,7.7H0V10H8.22Z" />
  </Svg>
);

LegalIcon.propTypes = {
  fill: PropTypes.string
};

export default LegalIcon;
