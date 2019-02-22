import React from 'react'
import PropTypes from 'prop-types'

function Facet({ defaultValue, name, options }) {
  const id = `select--${name}`
  return (
    <select defaultValue={defaultValue} id={id} name={id}>
      {options.map(({ text, value }, key) => (
        <option key={key} value={value ? value : text}>
          {text}
        </option>
      ))}
    </select>
  )
}

const valueTypes = PropTypes.oneOfType([
  PropTypes.string,
  PropTypes.number,
  PropTypes.bool,
])

Facet.propTypes = {
  name: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      value: valueTypes,
    })
  ),
  defaultValue: valueTypes,
}
Facet.defaultProps = {
  options: [],
}

export default Facet
