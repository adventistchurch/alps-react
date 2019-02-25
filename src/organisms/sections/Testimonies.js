import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import renderItems from '../../helpers/renderItems'
import ContentBlock from '../../molecules/blocks/ContentBlock'
import HeadingBlock from '../../molecules/blocks/HeadingBlock'

function Testimonies({ items, linkText, linkUrl, shareText, shareUrl, title }) {
  return (
    <section className="c-testimonies u-spacing u-posititon--relative">
      <HeadingBlock
        linkText={linkText}
        spacing="double--bottom"
        title={title}
        url={linkUrl}
      />

      <div className="l-grid l-grid-wrap l-grid-wrap--6-of-7">
        {/* TODO: replace js-carousel__multi-item" */}
        {renderItems(items, item => (
          <div className="l-grid-item--6-col l-grid-item--m--3-col l-grid-item--l--2-col l-grid-item--xl--1-col u-space--bottom u-padding--zero--sides">
            {/*
             * TODO: ContentBlock should be able to set the following classes:
             * - block: "u-spacing--half u-padding--right"
             * - title: "u-font--secondary--m u-text-transform--upper"
             */}
            <ContentBlock {...item} />
          </div>
        ))}
      </div>
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
