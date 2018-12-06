import React from "react";
import PropTypes from "prop-types";

import Icon from "../../atoms/icons/Icon";

const IconWrap = ({ name, size, fill, iconColor, className, ...props }) => (
  <span
    className={`u-icon u-icon--${size} u-path-fill--${fill}} ${className}`}
    {...props}
  >
    <Icon name={name} color={iconColor} />
  </span>
);

IconWrap.propTypes = {
  name: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md"]),
  fill: PropTypes.oneOf(["white"]),
  iconColor: PropTypes.string
};
IconWrap.defaultProps = {
  size: "sm",
  fill: "white"
};

export default IconWrap;
