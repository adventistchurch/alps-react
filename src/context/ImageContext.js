import React, { useContext } from 'react'
import PropTypes from 'prop-types'

const ImageContext = React.createContext()

export function ImageProvider({ children, ImageComponent }) {
  return (
    <ImageContext.Provider value={ImageComponent}>
      {children}
    </ImageContext.Provider>
  )
}
ImageProvider.propTypes = {
  children: PropTypes.node,
  ImageComponent: PropTypes.func,
}
ImageProvider.defaultProps = {
  ImageComponent: props => <img {...props} />,
}

export function useImageContext() {
  return useContext(ImageContext)
}
