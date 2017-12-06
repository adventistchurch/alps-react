import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/icons/Icon'
import Picture from '../../atoms/images/Picture'

const Heading = ({ title, icon }) => (
  <h2 className="font--tertiary--m theme--primary-text-color pad--btm">
    {icon && (
      <div className="icon icon--s">
        <Icon name={icon} color="fill--gray" />
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
  <h3 className={`media-block__title block__title ${className}`}>
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
    {datetime}
  </time>
)
MediaDate.propTypes = {
  datetime: PropTypes.string.isRequired,
}

const MediaImage = ({ srcSet, url, alt, className }) => (
  <a href={url} className="media-block__image-wrap block__image-wrap db">
    <div className={`${className} dib`}>
      <Picture
        className="media-block__image block__image"
        image={srcSet}
        alt={alt}
      />
    </div>
  </a>
)
MediaImage.propTypes = {
  srcSet: PropTypes.object.isRequired,
  url: PropTypes.string.isRequired,
  alt: PropTypes.string,
  className: PropTypes.string,
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
  classBlock,
  classInner,
  classTitle,
  classContent,
  classImage,
}) => {
  return (
    <div className={`media-block block spacing--quarter ${classBlock}`}>
      {headingTitle && <Heading title={headingTitle} icon={headingIcon} />}
      {kickerText && <Kicker text={kickerText} />}
      <div className={`media-block__inner spacing--quarter ${classInner}`}>
        {imageSrcSet && (
          <MediaImage
            srcSet={imageSrcSet}
            alt={imageAlt}
            url={url}
            className={classImage}
          />
        )}
        {video && <MediaVideo video={video} />}
        <div className={`media-block__content block__content  ${classContent}`}>
          {title && (
            <MediaTitle title={title} url={url} className={classTitle} />
          )}
          {datetime && <MediaDate />}
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
  datetime: PropTypes.string,
  cta: PropTypes.string,
  url: PropTypes.string,
  headingTitle: PropTypes.string,
  headingIcon: PropTypes.string,
  kickerText: PropTypes.string,
  classBlock: PropTypes.string,
  classInner: PropTypes.string,
  classTitle: PropTypes.string,
  classContent: PropTypes.string,
  classImage: PropTypes.string,
}
MediaBlock.defaultProps = {}

export default MediaBlock
