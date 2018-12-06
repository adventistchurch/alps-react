import React from 'react'
import PropTypes from 'prop-types'

const BreakoutBlock = ({ title, description, cta, url, blockClass }) => {
  return (
    <div
      className={`c-block__breakout u-padding u-padding--double--bottom u-padding--double--top u-spacing u-theme--background-color--darker u-theme--background-color--darker ${blockClass}`}
    >
      <h3 className="c-block__title u-color--white">{title}</h3>
      <p className="c-block__body u-theme--color--lighter">{description}</p>
      {cta && (
        <a href={url} className="o-button o-button--lighter">
          {cta}
        </a>
      )}
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

export default BreakoutBlock
