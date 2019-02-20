import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import InlineStyles from '../../helpers/InlineStyles'
import useBackgroundParallax from '../../helpers/useBackgroundParallax'
import useResponsiveStyles from '../../helpers/useResponsiveStyles'

import Figcaption from './Figcaption'

const backgroundMediaQueries = {
  default: null,
  small: 'min-width: 500px',
  medium: 'min-width: 700px',
  large: 'min-width: 1200px',
}

const getBackgroundImageRule = url => `.c-breakout-image__background {
  background-image: url('${url}');
}`

function BreakoutImage({ caption, imageSrcSet, parallax }) {
  const backgroundRef = useRef(null)
  const backgroundElem = backgroundRef.current

  const backgroundStyles = parallax
    ? useBackgroundParallax(backgroundElem, 8)
    : {}

  const backgroundImageStyles = useResponsiveStyles(
    getBackgroundImageRule,
    imageSrcSet,
    backgroundMediaQueries
  )

  return (
    <div className="c-breakout-image">
      <InlineStyles styles={backgroundImageStyles} />

      <div
        ref={backgroundRef}
        className="c-breakout-image__background u-image--breakout u-background--cover"
        style={backgroundStyles}
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
