import React from 'react'

import Carousel from '../../molecules/components/Carousel'

function HeroCarousel(props) {
  return (
    <section className="c-hero-carousel">
      <Carousel {...props} />
    </section>
  )
}

HeroCarousel.propTypes = {
  ...Carousel.propTypes,
}

export default HeroCarousel
