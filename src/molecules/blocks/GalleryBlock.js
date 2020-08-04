import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Picture from '../../atoms/images/Picture'
import Title from '../../atoms/texts/Title'
import { Div } from '../../helpers/Element'
import useToggle from '../../helpers/useToggle'

function GalleryBlock({ images, kicker, title }) {
  const { onToggle, openClass } = useToggle()

  const thumbImage = images.length > 0 ? images[0] : null
  const otherImages = images.length > 1 ? images.slice(1) : null

  return (
    <Div
      className={`c-gallery-block c-block ${openClass}`}
      backgroundColor="gray--light"
      borderSide="left"
      canBe="dark-dark"
      themeBorder="darker"
      themeBorderSide="left"
    >
      <div className="c-gallery-block__header">
        <Div className="c-gallery-block__title" padding spacing="half">
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
        </Div>
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
              <Picture image={image} />
              {image.caption && (
                <Div
                  className="c-gallery-block__caption"
                  color="gray"
                  fontType="secondary"
                  fontSize="s"
                  padding
                  paddingBottom="double"
                >
                  {image.caption}
                </Div>
              )}
            </div>
          ))}
        </div>
      )}
    </Div>
  )
}

GalleryBlock.propTypes = {
  images: PropTypes.arrayOf(Picture.propTypes.image),
  title: PropTypes.string.isRequired,
  kicker: PropTypes.string,
}

GalleryBlock.defaultProps = {
  images: [],
}

export default GalleryBlock
