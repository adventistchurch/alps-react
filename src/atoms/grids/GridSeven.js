import React from 'react'
import PropTypes from 'prop-types'

import Grid from './Grid'

function GridSeven({ children, inner, ...props }) {
  return (
    <Grid {...props} seven sevenInner={inner}>
      {children}
    </Grid>
  )
}

GridSeven.propTypes = {
  inner: PropTypes.bool,
  ...Grid.propTypes,
}
GridSeven.defaultProps = {
  ...Grid.defaultProps,
}

export default GridSeven
