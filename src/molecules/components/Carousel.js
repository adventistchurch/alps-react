import React from 'react'
import PropTypes from 'prop-types'

import renderItems from '../../helpers/renderItems'
import Icon from '../../atoms/icons/Icon'
import Slide from './Slide'

const Carousel = ({ slides, showArrows, outerClass, carouselClass }) => (
  <div className={`c-carousel u-position--relative ${outerClass}`}>
    <div className={`c-carousel__slides ${carouselClass}`}>
      {renderItems(slides, Slide)}
    </div>
    {showArrows && (
      <div className="c-carousel__controls">
        <span className="o-arrow__prev">
          <span className="c-carousel__arrow c-carousel__arrow--prev u-icon u-icon--s u-round u-theme--background-color--darker u-path-fill--white">
            <Icon name="arrow-bracket-left" />
          </span>
        </span>
        <span className="o-arrow__next">
          <span className="c-carousel__arrow c-carousel__arrow--next u-icon u-round u-theme--background-color--darker u-path-fill--white">
            <Icon name="arrow-bracket-right" />
          </span>
        </span>
      </div>
    )}
  </div>
)

Carousel.propTypes = {
  slides: PropTypes.array,
  showArrows: PropTypes.bool,
  outerClass: PropTypes.string,
  carouselClass: PropTypes.string,
}
Carousel.defaultProps = {
  slides: [],
  showArrows: true,
  carouselClass: 'js-carousel__single-item',
}

export default Carousel
