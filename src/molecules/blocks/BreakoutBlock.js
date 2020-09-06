import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import { Div, HeadingThree, Paragraph } from '../../helpers/Element'

export default function BreakoutBlock({
  title,
  description,
  cta,
  url,
  ...props
}) {
  return (
    <Div
      className="c-block__breakout"
      themeBackground="darker"
      padding
      paddingTop="double"
      paddingBottom="double"
      spacing
      canBe="dark-dark"
      {...props}
    >
      <HeadingThree className="c-block__title" color="white">
        {title}
      </HeadingThree>
      <Paragraph className="c-block__body" themeColor="lighter">
        {description}
      </Paragraph>
      {cta && url && <Button as="a" text={cta} url={url} lighter />}
    </Div>
  )
}

BreakoutBlock.propTypes = {
  /**
   * Block's Call-to-Action text.
   */
  cta: PropTypes.string,
  /**
   * Block's Description text.
   */
  description: PropTypes.string,
  /**
   * Block's Title text.
   */
  title: PropTypes.string.isRequired,
  /**
   * URL for the Call-to-Action button .
   */
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}
