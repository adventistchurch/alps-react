import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Picture from '../../atoms/images/Picture'
import Title from '../../atoms/texts/Title'
import { Div } from '../../helpers/Element'
import useToggle from '../../helpers/useToggle'

export default function GalleryBlock({ images, kicker, title }) {
  const { onToggle, openClass } = useToggle()

  const totalImages = images.length

  const thumbImage = totalImages > 0 ? images[0] : null
  const otherImages = totalImages > 1 ? images.slice(1) : null

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
              <Picture image={image} lazy={false} />
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
  /**
   * Gallery's images.
   * The first one will be displayed, the rest will be toggled with the "Show" button.
   */
  images: PropTypes.arrayOf(
    PropTypes.shape({
      srcSet: PropTypes.shape({
        default: PropTypes.string,
        '[breakpointA]': PropTypes.string,
        '[breakpointB]': PropTypes.string,
        '[breakpointX]': PropTypes.string,
      }),
      alt: PropTypes.string,
      caption: PropTypes.string,
    })
  ),
  /**
   * Gallery's title
   */
  title: PropTypes.string.isRequired,
  /**
   * Gallery's kicker
   */
  kicker: PropTypes.string,
}

GalleryBlock.defaultProps = {
  images: [],
}
