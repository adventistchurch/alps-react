import React from 'react'
import PropTypes from 'prop-types'

import { UL, LI, Link } from '../../../helpers/Element'

const styles = {
  autocomlete: {
    list: {
      position: 'absolute',
      width: '100%',
    },
  },
}

export default function Suggestions({ items }) {
  return (
    <UL
      style={styles.autocomlete.list}
      themeBorder="dark"
      borderSide="bottom"
      backgroundColor="white"
    >
      {items.map(({ label, href, onClick, key }) => (
        <LI key={key} paddingSize="half">
          <Link onClick={onClick} href={href} themeColor="darker">
            {label}
          </Link>
        </LI>
      ))}
    </UL>
  )
}

Suggestions.propTypes = {
  items: PropTypes.array,
}
