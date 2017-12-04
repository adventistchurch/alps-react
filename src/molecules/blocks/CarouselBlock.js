import React from 'react'
import PropTypes from 'prop-types'

import Carousel from '../../molecules/components/Carousel '

const CarouselBlock = ({ slides, heading }) => {
  return (
    <div className="carouselBlock-block block spacing--quarter {{ block_class }}">
      {heading && (
        <h2 className="font--tertiary--m theme--primary-text-color pad pad-half--btm">
          {heading.icon && <div className="icon icon--s">{heading.icon}</div>}
          {heading.title}
        </h2>
      )}
      <div className="carousel-block__carousel carousel-nav--4-3">
        <Carousel items={slides} />
      </div>
    </div>
  )
}

CarouselBlock.propTypes = {
  slides: PropTypes.array,
  heading: PropTypes.object,
}
CarouselBlock.defaultProps = {
  slides: [],
}

export default CarouselBlock
