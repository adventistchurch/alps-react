import React from 'react'

export default (items, Component, props) => {
  return (
    items &&
    items.map((item, key) => <Component {...props} {...item} key={key} />)
  )
}
