import React from 'react'
import PropTypes from 'prop-types'

import datetimeFormat from '../../helpers/datetimeFormat'
import { theme as themeColors } from '../../atoms/global/colors'
import Icon from '../../atoms/icons/Icon'
import Picture from '../../atoms/images/Picture'

const Heading = ({ title, icon }) => (
  <h2 className="font--tertiary--m theme--primary-text-color pad--btm">
    {icon && (
      <div className="icon icon--s">
        <Icon name={icon} color={themeColors.primary.fill} />
      </div>
    )}
    {title}
  </h2>
)
Heading.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string,
}

const Kicker = ({ text }) => (
  <span className="kicker font--secondary--m upper theme--secondary-text-color db">
    {text}
  </span>
)
Kicker.propTypes = {
  text: PropTypes.string.isRequired,
}

const MediaTitle = ({ title, url, className }) => (
  <h3
    className={`media-block__title block__title font--secondary--m ${
      className
    }`}
  >
    <a href={url} className="block__title-link theme--primary-text-color">
      {title}
    </a>
  </h3>
)
MediaTitle.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  className: PropTypes.string,
}

const MediaDescription = ({ description }) => (
  <div className="text text--s pad-half--btm">
    <p className="media-block__description block__description">
      <span className="font--primary--xs">{description}</span>
    </p>
  </div>
)
MediaDescription.propTypes = {
  description: PropTypes.string.isRequired,
}

const MediaDate = ({ datetime }) => (
  <time
    className="block__date font--secondary--xs brown space-half--btm"
    dateTime={datetime}
  >
    {datetimeFormat({ date: datetime })}
  </time>
)
MediaDate.propTypes = {
  datetime: PropTypes.number.isRequired,
}

const MediaImage = ({ srcSet, url, alt, round }) => {
  const roundClass = round ? 'round' : ''
  return (
    <a href={url} className="media-block__image-wrap block__image-wrap db">
      <div className={`${roundClass} dib`}>
        <Picture
          className="media-block__image block__image"
          image={srcSet}
          alt={alt}
        />
      </div>
    </a>
  )
}
MediaImage.propTypes = {
  srcSet: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  round: PropTypes.bool,
}

const MediaVideo = ({ video }) => (
  <div className="fitvid media-block__video">{video}</div>
)
MediaVideo.propTypes = {
  video: PropTypes.node.isRequired,
}

const MediaCallToAction = ({ label, url }) => (
  <p>
    <a
      className="media-block__cta block__cta btn theme--secondary-background-color"
      href={url}
    >
      {label}
    </a>
  </p>
)
MediaCallToAction.propTypes = {
  label: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

const MediaBlock = ({
  title,
  description,
  imageSrcSet,
  imageAlt,
  video,
  datetime,
  cta,
  url,
  headingTitle,
  headingIcon,
  kickerText,
  asRow,
  asBreakout,
  roundImage,
  blockClass,
  innerClass,
  titleClass,
  contentClass,
}) => {
  const rowClass = asRow ? 'block__row' : ''
  const breakoutClass = asBreakout
    ? 'bg--tan can-be--dark-dark block--breakout pad--secondary--for-breakouts'
    : ''
  return (
    <div
      className={`media-block block spacing--quarter ${breakoutClass} ${
        blockClass
      }`}
    >
      {headingTitle && <Heading title={headingTitle} icon={headingIcon} />}
      {kickerText && <Kicker text={kickerText} />}
      <div
        className={`media-block__inner spacing--quarter ${rowClass} ${
          innerClass
        }`}
      >
        {imageSrcSet && (
          <MediaImage
            srcSet={imageSrcSet}
            alt={imageAlt}
            url={url}
            round={roundImage}
          />
        )}
        {video && <MediaVideo video={video} />}
        <div className={`media-block__content block__content  ${contentClass}`}>
          {title && (
            <MediaTitle title={title} url={url} className={titleClass} />
          )}
          {datetime && <MediaDate datetime={datetime} />}
          <div className="spacing--half">
            {description && <MediaDescription description={description} />}
            {cta && <MediaCallToAction label={cta} url={url} />}
          </div>
        </div>
      </div>
    </div>
  )
}

MediaBlock.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  imageSrcSet: PropTypes.object,
  imageAlt: PropTypes.string,
  video: PropTypes.node,
  datetime: PropTypes.number,
  cta: PropTypes.string,
  url: PropTypes.string,
  headingTitle: PropTypes.string,
  headingIcon: PropTypes.string,
  kickerText: PropTypes.string,
  asRow: PropTypes.bool,
  asBreakout: PropTypes.bool,
  roundImage: PropTypes.bool,
  blockClass: PropTypes.string,
  innerClass: PropTypes.string,
  titleClass: PropTypes.string,
  contentClass: PropTypes.string,
}
MediaBlock.defaultProps = {
  asRow: false,
  asBreakout: false,
  roundImage: false,
  blockClass: '',
  innerClass: '',
  titleClass: '',
  contentClass: '',
}

export default MediaBlock
