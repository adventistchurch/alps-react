import React from 'react'
import PropTypes from 'prop-types'

const HeadingBlock = ({ title, description, cta, url, classNames }) => {
  return (
    <div className={'heading-block block' + classNames.block}>
      <div className="pad">
        <h2 className="pad no-pad--btm heading-block__heading font--secondary--l theme--secondary-text-color">
          {title}
        </h2>
        <div
          className={
            'pad heading-block__content block__content' + classNames.content
          }
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
  classNames: PropTypes.object,
}

export default HeadingBlock
