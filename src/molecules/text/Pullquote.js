import React from 'react'
import PropTypes from 'prop-types'

const Pullquote = ({ author, children }) => (
  <blockquote className="pullquote u-theme--border-color--darker--left u-theme--color--darker u-padding--right">
    <p>{children}</p>
    {author && (
      <cite className="o-citation u-theme--color--base">&mdash; {author}</cite>
    )}
  </blockquote>
)

Pullquote.propTypes = {
  children: PropTypes.string,
  author: PropTypes.string,
}

export default Pullquote
