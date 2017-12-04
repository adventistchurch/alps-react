import React from 'react'
import PropTypes from 'prop-types'

const Pullquote = ({ text, author }) => (
  <blockquote className="pullquote">
    <p>{text}</p>
    <br />
    <cite className="citation">&mdash; {author}</cite>
  </blockquote>
)

Pullquote.propTypes = {
  text: PropTypes.string,
  author: PropTypes.string,
}

export default Pullquote
