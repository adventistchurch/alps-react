import React from "react";
import PropTypes from "prop-types";

import Picture from "../../../atoms/images/Picture";

const MediaImage = ({
  srcSet,
  url,
  alt,
  round,
  imageClass,
  blockType,
  backgroundImage,
  wrapClass
}) => {
  const roundClass = round ? "u-round u-space--left" : "";
  const imgClass = imageClass ? imageClass : "";
  const blckType = blockType ? "c-block__icon c-block__icon--" + blockType : "";
  const bgdImage = backgroundImage
    ? " o-background-image u-background--cover"
    : "";
  const wrpClass = wrapClass ? wrapClass : "";
  return (
    <div
      className={`c-media-block__image c-block__image ${imgClass} ${blckType} ${bgdImage}`}
    >
      <div className={`c-block__image-wrap ${roundClass} ${wrpClass}`}>
        <a href={url} className="media-block__image-wrap block__image-wrap db">
          <div className={` dib`}>
            <Picture className="picture" image={srcSet} alt={alt} />
          </div>
        </a>
      </div>
    </div>
  );
};
MediaImage.propTypes = {
  srcSet: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  round: PropTypes.bool,
  imageClass: PropTypes.string,
  blockType: PropTypes.string,
  backgroundImage: PropTypes.string,
  wrapClass: PropTypes.string
};

export default MediaImage;
