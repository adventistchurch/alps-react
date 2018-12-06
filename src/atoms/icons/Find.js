import React from "react";
import PropTypes from "prop-types";

import Svg from "../../helpers/Svg";

const FindIcon = ({ fill }) => (
  <Svg title="o-icon__find" viewBox="0 0 10 10" className={fill} fill="#777">
    <path d="M0,4,2,8l4,2L10,0ZM5,7.24,3.49,6.51,2.76,5.05,6.41,3.59Z" />
  </Svg>
);

FindIcon.propTypes = {
  fill: PropTypes.string
};

export default FindIcon;
