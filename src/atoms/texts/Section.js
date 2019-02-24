import React from 'react'
import PropTypes from 'prop-types'

function Section({ className, children, ...props }) {
  return (
    <section className={`c-section c-section__blocks ${className}`} {...props}>
      {children}
    </section>
  )
}

Section.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
}
Section.defaultProps = {
  className: '',
}

export default Section
