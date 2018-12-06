import React from "react";
import PropTypes from "prop-types";

const MediaTitle = ({ title, url, className }) => (
  <h3 className={`c-media-block__title c-block__title ${className}`}>
    <a href={url} className="c-block__title-link u-theme--link-hover--dark">
      {title}
    </a>
  </h3>
);
MediaTitle.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  className: PropTypes.string
};

export default MediaTitle;
