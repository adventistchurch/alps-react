import React from 'react'
import PropTypes from 'prop-types'

import Button from '../../atoms/buttons/Button'
import { Div, HeadingThree, Paragraph } from '../../helpers/Element'

function BreakoutBlock({ title, description, cta, url, ...props }) {
  return (
    <Div
      className="c-block__breakout"
      themeBackground="darker"
      padding
      paddingTop="double"
      paddingBottom="double"
      spacing
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
  cta: PropTypes.string,
  description: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

BreakoutBlock.defaultProps = {
  canBe: 'dark-dark',
}

export default BreakoutBlock
