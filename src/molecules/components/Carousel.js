import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'
import Icon from '../../atoms/icons/Icon'
import Slide from './Slide'
import Slide2Columns from './Slide2Columns'

const Carousel = ({
  slides,
  showArrows,
  slides2column,
  outerClass,
  innerClass,
}) => {
  return (
    <div className={`carousel rel ${outerClass}`}>
      <div className={`carousel__slides ${innerClass}`}>
        {renderItems(slides, slides2column ? Slide2Columns : Slide)}
      </div>

      {showArrows && (
        <div className="carousel__controls">
          <span className="arrow__prev">
            <span className="carousel__arrow carousel__arrow--prev icon round">
              <Icon name="arrow-left" fill="theme--secondary-fill-color" />
            </span>
          </span>
          <span className="arrow__next">
            <span className="carousel__arrow carousel__arrow--next icon round">
              <Icon name="arrow-right" fill="theme--secondary-fill-color" />
            </span>
          </span>
        </div>
      )}
    </div>
  )
}

Carousel.propTypes = {
  slides: PropTypes.array,
  showArrows: PropTypes.bool,
  slides2column: PropTypes.bool,
  outerClass: PropTypes.string,
  innerClass: PropTypes.string,
}
Carousel.defaultProps = {
  slides: [],
  showArrows: true,
  slides2column: false,
}

export default Carousel
