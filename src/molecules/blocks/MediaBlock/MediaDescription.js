import React from "react";
import PropTypes from "prop-types";

const MediaDescription = ({ description }) => (
  <p className="c-media-block__description c-block__description">
    {description}
  </p>
);
MediaDescription.propTypes = {
  description: PropTypes.string.isRequired
};

export default MediaDescription;
