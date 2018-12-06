import React from 'react'
import PropTypes from 'prop-types'

import Icon from '../../atoms/icons/Icon'
import MediaBlock from '../../molecules/blocks/MediaBlock'
import renderItems from '../../helpers/renderItems'

const AccordionItem = ({
  title,
  description,
  imageSrcSet,
  datetime,
  cta,
  url,
}) => (
  <div className="accordion__item spacing--quarter">
    <div className="accordion__heading js-toggle-parent va--middle">
      <span className="icon icon--m accordion__arrow">
        <Icon name="arrow-right" color="fill--blue" />
      </span>
      &nbsp;
      <span className="font--secondary--m dib">{title}</span>
    </div>
    <div className="accordion__content">
      <MediaBlock
        title={title}
        description={description}
        image={imageSrcSet}
        datetime={datetime}
        cta={cta}
        url={url}
        classes={{ inner: 'block__row' }}
      />
    </div>
  </div>
)
AccordionItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  imageSrcSet: PropTypes.object,
  datetime: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  cta: PropTypes.string,
  url: PropTypes.string,
}

const Accordion = ({ items }) => {
  return (
    <div className="accordion rel spacing--half {{ accordion_class }}">
      {renderItems(items, AccordionItem)}
    </div>
  )
}

Accordion.propTypes = {
  items: PropTypes.array,
}
Accordion.defaultProps = {
  items: [],
}

export default Accordion
