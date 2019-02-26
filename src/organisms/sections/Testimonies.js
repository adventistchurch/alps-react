import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import ContentBlock from '../../molecules/blocks/ContentBlock'
import HeadingBlock from '../../molecules/blocks/HeadingBlock'

import Slider from '../../helpers/Slider'

const sliderProps = {
  fade: false,
  dots: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: {
    '500': {
      slidesToShow: 2,
      slidesToScroll: 2,
    },
    '900': {
      slidesToShow: 3,
      slidesToScroll: 3,
    },
    '1300': {
      slidesToShow: 6,
      slidesToScroll: 6,
    },
  },
}

function Testimonies({ items, linkText, linkUrl, shareText, shareUrl, title }) {
  return (
    <section className="c-testimonies u-spacing u-posititon--relative">
      <HeadingBlock
        linkText={linkText}
        spaceSide="bottom"
        spaceSize="double"
        title={title}
        url={linkUrl}
      />
      <Slider
        className="l-grid l-grid-wrap l-grid-wrap--6-of-7"
        {...sliderProps}
      >
        {items.map((item, key) => (
          <div
            className="l-grid-item--6-col l-grid-item--m--3-col l-grid-item--l--2-col l-grid-item--xl--1-col u-space--bottom u-padding--zero--sides"
            key={`slide-${key}`}
          >
            <ContentBlock
              {...item}
              className="u-spacing--half u-padding--right"
              titleClass="u-font--secondary--m u-text-transform--upper"
              titleStrong
            />
          </div>
        ))}
      </Slider>
      <Button className="u-space--lef" text={shareText} url={shareUrl} />
    </section>
  )
}

Testimonies.propTypes = {
  items: PropTypes.array,
  linkText: PropTypes.string,
  linkUrl: PropTypes.string,
  shareText: PropTypes.string,
  shareUrl: PropTypes.string,
  title: PropTypes.string,
}
Testimonies.defaultProps = {
  items: [],
  linkText: 'See All',
  shareText: 'Share your testimony!',
  title: 'Testimonies',
}

export default Testimonies
