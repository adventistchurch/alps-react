import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/icons/Icon'
import Image from '../../atoms/images/Image'

const GalleryBlock = ({ kicker, title, imageSrcSet }) => {
  return (
    <div className="js-this c-gallery-block c-block u-background-color--gray--light u-border--left u-theme--border-color--darker--left can-be--dark-dark">
      <div className="c-gallery-block__header">
        <div className="c-gallery-block__title u-padding u-spacing--half">
          {title && (
            <h2 className="u-font--primary--s u-theme--color--darker">
              {kicker && (
                <>
                  <span className="u-theme--color--base">
                    <em>{kicker}</em>
                  </span>{' '}
                </>
              )}
              {title}
            </h2>
          )}
          {imageSrcSet.length > 1 && (
            <button
              className="c-gallery-block__toggle js-toggle o-button o-button--outline o-button--toggle o-button--small"
              data-toggled="this"
              data-prefix="this"
            >
              <span className="u-icon u-icon--xs u-path-fill--white">
                <Icon name="plus" />
              </span>
            </button>
          )}
        </div>
        {imageSrcSet.length > 0 && (
          <div
            className="c-gallery-block__thumb u-background--cover"
            style={{
              backgroundImage: 'url(' + imageSrcSet[0].default + ')',
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        )}
      </div>
      {imageSrcSet.length > 1 && (
        <div className="c-gallery-block__body">
          {imageSrcSet
            .slice(1)
            .map(
              (
                {
                  default: src,
                  imageAlt: alt,
                  isPortrait: portrait,
                  imageCaption: caption,
                },
                key
              ) => {
                const portraitClass = portrait ? 'is-portrait' : ''
                return (
                  <div
                    key={key}
                    className={`c-gallery-block__image ${portraitClass}`}
                  >
                    <Image src={src} alt={alt} />
                    {caption && (
                      <div className="c-gallery-block__caption u-font--secondary--s u-color--gray u-padding u-padding--double--bottom">
                        {caption}
                      </div>
                    )}
                  </div>
                )
              }
            )}
        </div>
      )}
    </div>
  )
}

GalleryBlock.propTypes = {
  title: PropTypes.string.isRequired,
  kicker: PropTypes.string,
  imageSrcSet: PropTypes.array,
}

GalleryBlock.defaultProps = {
  imageSrcSet: [],
}

export default GalleryBlock
