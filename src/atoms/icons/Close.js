import React from "react";
import PropTypes from "prop-types";

import Svg from "../../helpers/Svg";

const CloseIcon = ({ fill }) => (
  <Svg
    title="o-icon__close"
    viewBox="0 0 10 10"
    className={fill}
    fill="#9b9b9b"
  >
    <path d="M9.91,1.5,8.5.09,5,3.59,1.5.09.09,1.5,3.59,5,.09,8.5,1.5,9.91,5,6.41l3.5,3.5L9.91,8.5,6.41,5Z" />
  </Svg>
);

CloseIcon.propTypes = {
  fill: PropTypes.string
};

export default CloseIcon;
