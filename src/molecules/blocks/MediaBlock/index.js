import React from "react";
import PropTypes from "prop-types";

import Kicker from "./Kicker";
import MediaTitle from "./MediaTitle";
import MediaDescription from "./MediaDescription";
import MediaDate from "./MediaDate";
import Category from "./Category";
import MediaImage from "./MediaImage";
import MediaVideo from "./MediaVideo";
import MediaCallToAction from "./MediaCallToAction";

const MediaBlock = ({
  title,
  description,
  imageSrcSet,
  imageAlt,
  imageClass,
  video,
  datetime,
  dateFormat,
  category,
  cta,
  url,
  kickerText,
  kickerClass,
  showAs,
  reversed,
  roundImage,
  blockClass,
  titleClass,
  contentClass,
  groupClass,
  metaClass,
  iconCta
}) => {
  const grpClass = groupClass ? groupClass : "";
  const showReversed = reversed
    ? "c-block--reversed c-media-block--reversed"
    : "";
  return (
    <div
      className={`c-media-block c-block ${showAs} ${showReversed} ${blockClass}`}
    >
      {imageSrcSet && (
        <MediaImage
          srcSet={imageSrcSet}
          alt={imageAlt}
          url={url}
          round={roundImage}
          imageClass={imageClass}
        />
      )}
      {video && <MediaVideo video={video} />}
      <div
        className={`c-media-block__content c-block__content u-spacing ${contentClass}`}
      >
        <div
          className={`u-spacing c-block__group c-media-block__group ${grpClass}`}
        >
          <div className="u-spacing u-width--100p">
            {kickerText && <Kicker text={kickerText} className={kickerClass} />}
            {title && (
              <MediaTitle title={title} url={url} className={titleClass} />
            )}
            {description && <MediaDescription description={description} />}
          </div>
          <div className={`c-media-block__meta c-block__meta ${metaClass}`}>
            {category && <Category category={category} />}
            {datetime && (
              <MediaDate datetime={datetime} dateFormat={dateFormat} />
            )}
          </div>
          {cta && <MediaCallToAction label={cta} url={url} icon={iconCta} />}
        </div>
      </div>
    </div>
  );
};

MediaBlock.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageSrcSet: PropTypes.object,
  imageAlt: PropTypes.string,
  imageClass: PropTypes.string,
  video: PropTypes.node,
  datetime: PropTypes.number,
  dateFormat: PropTypes.oneOf(["date", "time", "datetime"]),
  category: PropTypes.string,
  cta: PropTypes.string,
  url: PropTypes.string,
  kickerText: PropTypes.string,
  kickerClass: PropTypes.string,
  showAs: PropTypes.string,
  asBreakout: PropTypes.bool,
  roundImage: PropTypes.bool,
  blockClass: PropTypes.string,
  reversed: PropTypes.bool,
  innerClass: PropTypes.string,
  titleClass: PropTypes.string,
  contentClass: PropTypes.string,
  groupClass: PropTypes.string,
  metaClass: PropTypes.string,
  iconCta: PropTypes.string
};
MediaBlock.defaultProps = {
  showAs: false,
  asBreakout: false,
  roundImage: false,
  blockClass: "",
  innerClass: "",
  titleClass: "",
  contentClass: "",
  iconCta: "arrow-bracket-right",
  dateFormat: "date"
};

export default MediaBlock;
