import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Picture from '../../atoms/images/Picture'
import Title from '../../atoms/texts/Title'
import useToggle from '../../helpers/useToggle'

function GalleryBlock({ images, kicker, title }) {
  const { onToggle, openClass } = useToggle()

  const thumbImage = images.length > 0 ? images[0] : null
  const otherImages = images.length > 1 ? images.slice(1) : null

  return (
    <div
      className={`c-gallery-block c-block u-background-color--gray--light u-border--left u-theme--border-color--darker--left can-be--dark-dark ${openClass}`}
    >
      <div className="c-gallery-block__header">
        <div className="c-gallery-block__title u-padding u-spacing--half">
          {title && <Title text={title} kicker={kicker} />}
          {otherImages && (
            <Button
              as="button"
              className={`c-gallery-block__toggle ${openClass}`}
              icon="plus"
              iconFill="white"
              onClick={onToggle}
              outline
              small
              toggle
            />
          )}
        </div>
        {thumbImage && (
          <div
            className="c-gallery-block__thumb u-background--cover"
            style={{
              backgroundImage: `url(${thumbImage.srcSet.default})`,
              backgroundPosition: 'center center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        )}
      </div>
      {otherImages && (
        <div className="c-gallery-block__body">
          {otherImages.map((image, key) => (
            <div
              className={`c-gallery-block__image ${
                image.portrait ? 'is-portrait' : ''
              }`}
              key={key}
            >
              <Picture image={image.srcSet} alt={image.alt} />
              {image.caption && (
                <div className="c-gallery-block__caption u-font--secondary--s u-color--gray u-padding u-padding--double--bottom">
                  {image.caption}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

GalleryBlock.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      alt: PropTypes.string,
      caption: PropTypes.string,
      srcSet: PropTypes.object,
    })
  ),
  title: PropTypes.string.isRequired,
  kicker: PropTypes.string,
}

GalleryBlock.defaultProps = {
  images: [],
}

export default GalleryBlock
