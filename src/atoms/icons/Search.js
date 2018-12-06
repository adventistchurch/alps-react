import React from "react";
import PropTypes from "prop-types";

import Svg from "../../helpers/Svg";

const SearchIcon = ({ fill }) => (
  <Svg viewBox="0 0 10 10" title="o-icon__search" className={fill} fill="#777">
    <path d="M9.91,8.5,7.43,6A4,4,0,1,0,4,8a4,4,0,0,0,2-.57L8.5,9.91ZM2,4A2,2,0,1,1,4,6,2,2,0,0,1,2,4Z" />
  </Svg>
);

SearchIcon.propTypes = {
  fill: PropTypes.string
};

export default SearchIcon;
