import React from "react";
import PropTypes from "prop-types";

const MediaVideo = ({ video }) => (
  <div className="c-block__image-wrap ">
    <figure className="o-figure ">
      <div className="fitvid">{video}</div>
    </figure>
  </div>
);
MediaVideo.propTypes = {
  video: PropTypes.node.isRequired
};

export default MediaVideo;
