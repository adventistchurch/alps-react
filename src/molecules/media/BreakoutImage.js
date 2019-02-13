import React from 'react'
import PropTypes from 'prop-types'

import InlineStyles from '../../helpers/InlineStyles'
import useResponsiveStyles from '../../helpers/useResponsiveStyles'

import Figcaption from './Figcaption'

const mediaQueries = {
  default: null,
  small: 'min-width: 500px',
  medium: 'min-width: 700px',
  large: 'min-width: 1200px',
}

function BreakoutImage({ caption, imageSrcSet, parallax }) {
  // get background image's styles
  const backgroundImageStyles = useResponsiveStyles(
    url => `.c-breakout-image__background {
      background-image: url('${url}');
    }`,
    imageSrcSet,
    mediaQueries
  )

  const parallaxProps = parallax
    ? {
        dataType: 'background',
        dataSpeed: '8',
      }
    : {}

  return (
    <div className="c-breakout-image">
      <InlineStyles styles={backgroundImageStyles} />

      <div
        className={`c-breakout-image__background u-image--breakout u-background--cover ${
          parallax ? 'has-parallax' : ''
        }`}
        {...parallaxProps}
      />

      {caption && (
        <div className="c-breakout-image__caption">
          <Figcaption>{caption}</Figcaption>
        </div>
      )}
    </div>
  )
}

BreakoutImage.propTypes = {
  caption: PropTypes.string,
  imageSrcSet: PropTypes.object,
  parallax: PropTypes.bool,
}

BreakoutImage.defaultProps = {
  parallax: false,
}

export default BreakoutImage
