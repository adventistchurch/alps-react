import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import Title from '../../atoms/texts/Title'
import { Div } from '../../helpers/Element'
import useToggle from '../../helpers/useToggle'

export default function ContentBlockExpand({ title, kicker, description }) {
  const { onToggle, openClass } = useToggle()

  return (
    <Div
      className={`c-block c-block c-block__expand ${openClass}`}
      backgroundColor="gray--light"
      borderSide="left"
      canBe="dark-dark"
      themeBorder="darker"
      themeBorderSide="left"
    >
      <div className="c-block__header">
        <Div className="c-block__title" padding>
          {title && <Title text={title} kicker={kicker} />}

          <div className="c-block__toggle">
            <Button
              as="button"
              className={openClass}
              icon="plus"
              onClick={onToggle}
              outline
              small
              toggle
            />
          </div>
        </Div>
      </div>
      <Div className="c-block__body" padding paddingTop="zero" spacing>
        <p>{description}</p>
      </Div>
    </Div>
  )
}

ContentBlockExpand.propTypes = {
  /**
   * Block's title text.
   */
  title: PropTypes.string.isRequired,
  /**
   * Block's kicker text.
   */
  kicker: PropTypes.string,
  /**
   * Block's description text.
   */
  description: PropTypes.string,
}
