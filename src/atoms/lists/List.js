import React from 'react'
import PropTypes from 'prop-types'

import Text from '../texts/Text'

import Element from '../../helpers/Element'
import renderItems from '../../helpers/renderItems'

function ListItem({ text, unorderedItems, orderedItems }) {
  return (
    <li>
      {text}
      {unorderedItems && <ul>{renderItems(unorderedItems, ListItem)}</ul>}
      {orderedItems && <ol>{renderItems(orderedItems, ListItem)}</ol>}
    </li>
  )
}

ListItem.propTypes = {
  text: PropTypes.string.isRequired,
  unorderedItems: PropTypes.array,
  orderedItems: PropTypes.array,
}
ListItem.defaultProps = {
  unorderedItems: [],
  orderedItems: [],
}

function List({ items, as }) {
  return (
    <Text>
      <Element tag={as}>{renderItems(items, ListItem)}</Element>
    </Text>
  )
}

List.propTypes = {
  items: PropTypes.array,
  as: PropTypes.oneOf(['ol', 'ul']),
}
List.defaultProps = {
  items: [],
  as: 'ul',
}

export default List
