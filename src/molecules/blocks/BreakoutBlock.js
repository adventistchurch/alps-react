import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'

const BreakoutBlock = ({ title, description, cta, url, blockClass }) => {
  return (
    <div
      className={`c-block__breakout u-padding u-padding--double--bottom u-padding--double--top u-spacing u-theme--background-color--darker ${blockClass}`}
    >
      <h3 className="c-block__title u-color--white">{title}</h3>
      <p className="c-block__body u-theme--color--lighter">{description}</p>
      {cta && url && <Button as="a" text={cta} url={url} lighter />}
    </div>
  )
}

BreakoutBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  cta: PropTypes.string,
  url: PropTypes.string,
  blockClass: PropTypes.string,
}

BreakoutBlock.defaultProps = {
  blockClass: 'can-be--dark-dark',
}

export default BreakoutBlock
