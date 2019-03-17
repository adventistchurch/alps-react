import React from 'react'

import Figure from './Figure'

function FigureWithCaption(props) {
  return <Figure {...props} />
}

FigureWithCaption.propTypes = Figure.propTypes

export default FigureWithCaption
