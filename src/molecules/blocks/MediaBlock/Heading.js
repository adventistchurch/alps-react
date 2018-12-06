import React from "react";
import PropTypes from "prop-types";

import { theme as themeColors } from "../../../atoms/global/colors";
import Icon from "../../../atoms/icons/Icon";

//??
const Heading = ({ title, icon }) => (
  <h2 className="font--tertiary--m theme--primary-text-color pad--btm">
    {icon && (
      <div className="icon icon--s">
        <Icon name={icon} color={themeColors.primary.fill} />
      </div>
    )}
    {title}
  </h2>
);
Heading.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

export default Heading;
