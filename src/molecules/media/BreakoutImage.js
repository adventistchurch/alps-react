import React from 'react'
import PropTypes from 'prop-types'

import Figcaption from './Figcaption'

const BreakoutImage = ({ caption, imageSrcSet, parallax }) => {
  return (
    <div className="c-breakout-image">
      <style type="text/css">
        {`.c-breakout-image__background {
              background-image: url('${imageSrcSet.default}');
            }
            @media(min-width: 500px) {
              .c-breakout-image__background {
                background-image: url('${imageSrcSet.small}');
              }
            }
            @media(min-width: 700px) {
              .c-breakout-image__background {
                background-image: url('${imageSrcSet.medium}');
              }
            }
            @media(min-width: 1200px) {
              .c-breakout-image__background {
                background-image: url('${imageSrcSet.large}');
              }
            }`}
      </style>

      {parallax ? (
        <div
          className="c-breakout-image__background u-image--breakout u-background--cover has-parallax"
          data-type="background"
          data-speed="8"
        />
      ) : (
        <div className="c-breakout-image__background u-image--breakout u-background--cover" />
      )}
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
