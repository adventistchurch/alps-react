import React from "react";
import PropTypes from "prop-types";

import Button from "../../atoms/buttons/Button";
import IconWrap from "../../atoms/icons/IconWrap";
import Image from "../../atoms/images/Image";

const GalleryBlock = ({ kicker, title, imageSrcSet }) => {
  return (
    <div className="js-this c-gallery-block c-block u-background-color--gray--light u-border--left u-theme--border-color--darker--left can-be--dark-dark">
      <div className="c-gallery-block__header">
        <div className="c-gallery-block__title u-padding u-spacing--half">
          {title && (
            <h2 className="u-font--primary--s u-theme--color--darker">
              <span className="u-theme--color--base">
                <em>{kicker}</em>
              </span>{" "}
              {title}
            </h2>
          )}
          <Button
            className="c-gallery-block__toggle js-toggle "
            small
            toggle
            outline
            icon="plus"
            iconClass="u-icon--xs u-path-fill--white"
            data-toggled="this"
            data-prefix="this"
          >
            <IconWrap name="plus" size="xs" fill="white" />
          </Button>
        </div>
        <div
          className="c-gallery-block__thumb u-background--cover"
          style={{
            backgroundImage: "url(" + imageSrcSet[0].default + ")",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat"
          }}
        />
      </div>
      <div className="c-gallery-block__body">
        {imageSrcSet.map(
          ({ default: src, imageAlt: alt, imageCaption: caption }, key) => (
            <div key={key} className="c-gallery-block__image ">
              <Image src={src} alt={alt} />
              <div className="c-gallery-block__caption u-font--secondary--s u-color--gray u-padding u-padding--double--bottom">
                {caption}
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
};

GalleryBlock.propTypes = {
  title: PropTypes.string.isRequired,
  kicker: PropTypes.string,
  description: PropTypes.string,
  imageSrcSet: PropTypes.array
};

export default GalleryBlock;
