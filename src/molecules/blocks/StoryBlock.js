import React from 'react'
import PropTypes from 'prop-types'

import If from '../../helpers/If'
import WrapIf from '../../helpers/WrapIf'
import Picture from '../../atoms/images/Picture'

const StoryBlock = ({
  title,
  subtitle,
  imageSrcSet,
  imageAlt,
  bgImage,
  description,
  url,
  isVideo,
  textImageSrcSet,
  textImageAlt,
  cta,
  className,
}) => {
  return (
    <div
      className={`story-block block spacing--half pad ${className}`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="story-block__image-wrap round">
        <Picture
          className="story-block__image"
          image={imageSrcSet}
          alt={imageAlt}
        />
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
            <If condition={textImageSrcSet}>
              <a
                className="story-block__text-image-wrap space-half--btm"
                href={url}
              >
                <WrapIf
                  condition={isVideo}
                  Wrapper={({ children }) => (
                    <div className="is-video">{children}</div>
                  )}
                >
                  <Picture
                    className="story-block__text-image"
                    image={textImageSrcSet}
                    alt={textImageAlt}
                  />
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
  imageSrcSet: PropTypes.object,
  imageAlt: PropTypes.string,
  bgImage: PropTypes.string,
  textImageSrcSet: PropTypes.object,
  textImageAlt: PropTypes.string,
  description: PropTypes.string,
  url: PropTypes.string,
  isVideo: PropTypes.bool,
  cta: PropTypes.string,
  className: PropTypes.string,
}

export default StoryBlock
