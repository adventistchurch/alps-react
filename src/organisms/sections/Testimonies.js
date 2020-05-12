import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import ContentBlock from '../../molecules/blocks/ContentBlock'
import HeadingBlock from '../../molecules/blocks/HeadingBlock'

import Slider from '../../helpers/Slider'
import { Div, Section } from '../../helpers/Element'

const sliderSettings = {
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
    <Section className="c-testimonies" position="relative" spacing>
      <HeadingBlock
        linkText={linkText}
        spaceSide="bottom"
        spaceSize="double"
        title={title}
        url={linkUrl}
      />
      <Slider gridWrap={6} settings={sliderSettings}>
        {items.map((item, key) => (
          <Div
            gridItemSize={6}
            gridItemSizeAtM={3}
            gridItemSizeAtL={2}
            gridItemSizeAtXL={1}
            key={`slide-${key}`}
            paddingSide="sides"
            paddingSize="zero"
            spaceSide="bottom"
          >
            <ContentBlock
              {...item}
              spacingSize="half"
              paddingSide="right"
              titleProps={{
                fontType: 'secondary',
                fontSize: 'm',
                transform: 'upper',
                strong: true,
              }}
            />
          </Div>
        ))}
      </Slider>
      <Button text={shareText} url={shareUrl} spaceSide="left" />
    </Section>
  )
}

Testimonies.propTypes = {
  items: PropTypes.array,
  linkText: PropTypes.string,
  linkUrl: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
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
