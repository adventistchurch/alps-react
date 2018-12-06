import React from "react";
import PropTypes from "prop-types";

import Image from "./Image";

const Sources = ({ image }) => {
  const breakpoints = Object.keys(image)
    .filter(i => i !== "default")
    .reverse();
  return breakpoints.map((x, i) => (
    <source key={i} srcSet={image[x]} media={`(min-width: ${x}px)`} />
  ));
};

const Picture = ({ image, alt, lazy }) => {
  let opts = [];
  opts[lazy ? "data-lazy" : "srcSet"] = image.default;
  return (
    <picture className="picture">
      <Sources image={image} />
      <Image alt={alt} itemProp="image" {...opts} />
    </picture>
  );
};

Picture.propTypes = {
  image: PropTypes.object.isRequired,
  alt: PropTypes.string,
  lazy: PropTypes.bool
};
Picture.defaultProps = {
  image: { default: "" }
};

export default Picture;
