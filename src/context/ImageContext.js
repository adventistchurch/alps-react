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

export function useImageComponent() {
  return useContext(ImageContext)
}
