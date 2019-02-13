import React, { useEffect, useRef, useState } from 'react'
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

// Apply parallax effect to background images.
function useBackgroundParallax(element, speed = 0) {
  const [y, setY] = useState(0)

  // event listener
  const listener = () => {
    const elementBox = element ? element.getBoundingClientRect() : { top: 0 }
    setY(-((window.pageYOffset - elementBox.top) / speed))
  }

  useEffect(() => {
    // Adds listeners on scroll and resize
    window.addEventListener('scroll', listener)
    window.addEventListener('resize', listener)

    // Triggers listener for refresh
    listener()

    // Clear listeners on component unmount
    return () => {
      window.removeEventListener('scroll', listener)
      window.removeEventListener('resize', listener)
    }
  }, [])

  return { backgroundPosition: `50% ${y}px` }
}

function BreakoutImage({ caption, imageSrcSet, parallax }) {
  const backgroundRef = useRef()
  const backgroundStyles = parallax
    ? useBackgroundParallax(
        backgroundRef.current, // Element used to calculate the effect
        8, // Speed
        parallax // toggles parallax
      )
    : {}

  // get background image's styles
  const backgroundImageStyles = useResponsiveStyles(
    url => `.c-breakout-image__background {
      background-image: url('${url}');
    }`,
    imageSrcSet,
    mediaQueries
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
