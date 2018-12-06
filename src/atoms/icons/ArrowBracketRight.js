import React from "react";
import PropTypes from "prop-types";

import Svg from "../../helpers/Svg";

const ArrowBracketRightIcon = ({ fill }) => (
  <Svg
    title="o-arrow__bracket--right"
    viewBox="0 0 10 10"
    className={fill}
    fill="#9b9b9b"
  >
    <path d="M6.75,3.59,3.25.09,1.84,1.5,5.34,5,1.84,8.5,3.25,9.91l3.5-3.5L8.16,5Z" />
  </Svg>
);

ArrowBracketRightIcon.propTypes = {
  fill: PropTypes.string
};

export default ArrowBracketRightIcon;
