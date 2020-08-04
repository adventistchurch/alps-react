import React from 'react'
import PropTypes from 'prop-types'

import { Div, HeadingThree, Link, Paragraph } from '../../helpers/Element'

export default function DrawerLinks({ title, items }) {
  return (
    <Div spacing="half">
      <HeadingThree
        fontType="secondary"
        fontSize="s"
        transform="upper"
        fontWeight="bold"
      >
        {title}:
      </HeadingThree>

      <Paragraph spacing="half">
        {items.map(({ text, url }, i) => (
          <Link href={url} linkColor="white" key={`${url}-${i}`}>
            {text}
          </Link>
        ))}
      </Paragraph>
    </Div>
  )
}

DrawerLinks.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string,
      utl: PropTypes.number,
    })
  ),
}
DrawerLinks.defaultProps = {
  items: [],
}
