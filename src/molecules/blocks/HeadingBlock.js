import React from 'react'
import PropTypes from 'prop-types'

import * as colors from '../../atoms/global/colors'

const HeadingBlock = ({
  title,
  description,
  cta,
  url,
  className,
  contentClass,
  hasBorder,
  borderColor,
}) => {
  const borderClass = hasBorder
    ? `has-border--left ${
        borderColor ? `has-border--left--${borderColor}` : ''
      }`
    : ''
  return (
    <div className={`heading-block block ${borderClass} ${className}`}>
      <div className="pad">
        <h2 className="pad no-pad--btm heading-block__heading font--secondary--l theme--secondary-text-color">
          {title}
        </h2>
        <div
          className={`pad heading-block__content block__content ${
            contentClass
          }`}
        >
          <div className="spacing">
            <div className="text">
              <p className="heading-block__description block__description">
                {description}
              </p>
            </div>
            {cta && (
              <p>
                <a
                  href={url}
                  className="media-block__cta block__cta btn theme--secondary-background-color"
                >
                  {cta}
                </a>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

HeadingBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  cta: PropTypes.string,
  url: PropTypes.string,
  className: PropTypes.string,
  contentClass: PropTypes.string,
  hasBorder: PropTypes.bool,
  borderColor: PropTypes.oneOf([...colors.primary, ...colors.secondary]),
}

export default HeadingBlock
