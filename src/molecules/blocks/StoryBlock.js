import React from 'react'
import PropTypes from 'prop-types'

import If from '../../helpers/If'
import WrapIf from '../../helpers/WrapIf'
import Image from '../../atoms/images/Image'

const StoryBlock = ({
  title,
  subtitle,
  image,
  bgImage,
  description,
  url,
  isVideo,
  textImage,
  cta,
  className,
}) => {
  return (
    <div
      className={`story-block block spacing--half pad ${className}`}
      style={`background-image: url(${bgImage})`}
    >
      <div className="story-block__image-wrap round">
        <Image className="story-block__image" {...image} />
      </div>
      <div className="story-block__content spacing">
        <div>
          <h2 className="story-block__heading font--secondary--l theme--secondary-text-color">
            {title}
          </h2>
          <If condition={subtitle}>
            <p className="font--secondary--xs white">{subtitle}</p>
          </If>
        </div>
        <div className="spacing">
          <div className="text story-block__description block__description white">
            <If condition={textImage}>
              <a
                className="story-block__text-image-wrap space-half--btm"
                href={url}
              >
                <WrapIf
                  condition={isVideo}
                  wrapper={<div className="is-video" />}
                >
                  <Image className="story-block__text-image" {...textImage} />
                </WrapIf>
              </a>
            </If>
            {description}
          </div>
          <If condition={cta}>
            <p>
              <a
                className="story-block__cta block__cta btn theme--secondary-background-color"
                href={url}
              >
                {cta}
              </a>
            </p>
          </If>
        </div>
      </div>
    </div>
  )
}

StoryBlock.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  image: PropTypes.object,
  bgImage: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  isVideo: PropTypes.bool,
  textImage: PropTypes.object,
  cta: PropTypes.string,
  className: PropTypes.string,
}

export default StoryBlock
