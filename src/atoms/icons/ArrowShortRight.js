import React from "react";
import PropTypes from "prop-types";

import Svg from "../../helpers/Svg";

const ArrowShortRightIcon = ({ fill }) => (
  <Svg
    title="o-arrow__short--right"
    viewBox="0 0 10 10"
    className={fill}
    fill="#9b9b9b"
  >
    <path d="M5,.09,3.62,1.5,6.12,4H.05V6H6.12L3.62,8.5,5,9.91,10,5Z" />
  </Svg>
);

ArrowShortRightIcon.propTypes = {
  fill: PropTypes.string
};

export default ArrowShortRightIcon;
