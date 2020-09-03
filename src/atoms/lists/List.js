import React from 'react'
import PropTypes from 'prop-types'

import Text from '../texts/Text'

import Element from '../../helpers/Element'

function ListItem({ text, items, nestedAs, ...props }) {
  return (
    <Element {...props} as="li">
      {text}
      {items && (
        <Element tag={nestedAs}>
          {items.map((props, i) => {
            return (
              <ListItem
                nestedAs={nestedAs}
                {...props}
                key={`${nestedAs}-item-${i}`}
              />
            )
          })}
        </Element>
      )}
    </Element>
  )
}

ListItem.propTypes = {
  text: PropTypes.node.isRequired,
  /**
   * Subitems to display
   */
  items: PropTypes.array,
  nestedAs: PropTypes.oneOf(['ol', 'ul']),
}

export default function List({ items, as, ...props }) {
  return (
    <Text {...props}>
      <Element tag={as}>
        {items.map((props, i) => {
          return <ListItem nestedAs={as} {...props} key={`${as}-item-${i}`} />
        })}
      </Element>
    </Text>
  )
}

List.propTypes = {
  /**
   * HTML element used to render this list
   */
  as: PropTypes.oneOf(['ol', 'ul']),
  /**
   * Items to display
   */
  items: PropTypes.arrayOf(
    PropTypes.shape({ text: PropTypes.node.isRequired, items: PropTypes.array })
  ),
}
List.defaultProps = {
  items: [],
  as: 'ul',
}
