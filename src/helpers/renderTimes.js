import React from 'react'

import range from './range'

export default (times = 1, Component, props = {}) => {
  return range(1, times).map((item, key) => (
    <Component {...props} number={item} key={key} />
  ))
}
