import React, { useRef } from 'react'
import PropTypes from 'prop-types'

import InlineStyles from '../../helpers/InlineStyles'
import useBackgroundParallax from '../../helpers/useBackgroundParallax'
import useResponsiveStyles from '../../helpers/useResponsiveStyles'

import Figcaption from './Figcaption'

const getBackgroundRule = url => `.c-breakout-image__background {
  background-image: url('${url}');
}`

function BreakoutImage({ caption, srcSet, parallax }) {
  const { backgroundRef, parallaxStyles } = useBackgroundParallax({
    enabled: parallax,
    speed: 8,
  })

  const inlineStyles = useResponsiveStyles(getBackgroundRule, srcSet)

  return (
    <div className="c-breakout-image">
      <InlineStyles styles={inlineStyles} />

      <div
        ref={backgroundRef}
        className="c-breakout-image__background u-image--breakout u-background--cover"
        style={parallaxStyles}
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
  srcSet: PropTypes.object,
  parallax: PropTypes.bool,
}

BreakoutImage.defaultProps = {
  parallax: false,
}

export default BreakoutImage
