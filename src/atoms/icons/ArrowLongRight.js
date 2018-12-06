import React from "react";
import PropTypes from "prop-types";

import Svg from "../../helpers/Svg";

const ArrowLongRightIcon = ({ fill }) => (
  <Svg
    title="o-arrow__long--right"
    viewBox="0 0 20 20"
    className={fill}
    fill="#9b9b9b"
  >
    <path d="M18.29,8.59l-3.5-3.5L13.38,6.5,15.88,9H.29v2H15.88l-2.5,2.5,1.41,1.41,3.5-3.5L19.71,10Z" />
  </Svg>
);

ArrowLongRightIcon.propTypes = {
  fill: PropTypes.string
};

export default ArrowLongRightIcon;
