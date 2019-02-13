import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Title from '../../atoms/texts/Title'
import useToggle from '../../helpers/useToggle'

function ContentBlockExpand({ kicker, title, description }) {
  const { onToggle, openClass } = useToggle()

  return (
    <div
      className={`c-block c-block c-block__expand u-background-color--gray--light u-border--left u-theme--border-color--darker--left can-be--dark-dark ${openClass}`}
    >
      <div className="c-block__header">
        <div className="c-block__title u-padding">
          {title && <Title text={title} kicker={kicker} />}

          <div className="c-block__toggle">
            <Button
              as="button"
              className={openClass}
              icon="plus"
              iconFill="white"
              onClick={onToggle}
              outline
              small
              toggle
            />
          </div>
        </div>
      </div>
      <div className="c-block__body u-padding u-padding--zero--top u-spacing">
        <p>{description}</p>
      </div>
    </div>
  )
}

ContentBlockExpand.propTypes = {
  title: PropTypes.string.isRequired,
  kicker: PropTypes.string,
  description: PropTypes.string,
}

export default ContentBlockExpand
