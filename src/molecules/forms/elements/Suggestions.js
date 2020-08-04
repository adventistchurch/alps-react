import React from 'react'
import PropTypes from 'prop-types'

import { UL, LI, Link } from '../../../helpers/Element'

export default function Suggestions({ items }) {
  return (
    <UL className="o-suggestions" borderSide="bottom" themeColor="base">
      {items.map(({ text, href, onClick, key }) => (
        <LI
          key={key}
          className="o-suggestions__item"
          fontType="secondary"
          paddingTop="half"
          paddingBottom="half"
        >
          <Link className="o-suggestions__link" onClick={onClick} href={href}>
            {text}
          </Link>
        </LI>
      ))}
    </UL>
  )
}

Suggestions.propTypes = {
  items: PropTypes.array,
}
