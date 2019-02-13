import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Image from '../../atoms/images/Image'
import Title from '../../atoms/texts/Title'
import useToggle from '../../helpers/useToggle'

function GalleryBlock({ kicker, title, imageSrcSet }) {
  const { onToggle, openClass } = useToggle()

  const thumbImage = imageSrcSet.length > 0 ? imageSrcSet[0].default : null
  const otherImages = imageSrcSet.length > 1 ? imageSrcSet.slice(1) : null

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
              backgroundImage: `url(${thumbImage})`,
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
                image.isPortrait ? 'is-portrait' : ''
              }`}
              key={key}
            >
              <Image src={image.src} alt={image.imageAlt} />
              {image.imageCaption && (
                <div className="c-gallery-block__caption u-font--secondary--s u-color--gray u-padding u-padding--double--bottom">
                  {image.mageCaption}
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
  title: PropTypes.string.isRequired,
  kicker: PropTypes.string,
  imageSrcSet: PropTypes.array,
}

GalleryBlock.defaultProps = {
  imageSrcSet: [],
}

export default GalleryBlock
