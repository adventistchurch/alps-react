import React from 'react'
import PropTypes from 'prop-types'

const Category = ({ category }) => (
  <span className="c-block__category u-text-transform--upper">{category}</span>
)
Category.propTypes = {
  category: PropTypes.string.isRequired,
}

export default Category
