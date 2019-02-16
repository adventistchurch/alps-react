import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

const MenuContext = React.createContext({
  isOpen: false,
  searchHasFocus: false,
  setIsOpen: value => value,
  setSearchHasFocus: value => value,
})

function DrawerContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchHasFocus, setSearchHasFocus] = useState(false)

  return (
    <MenuContext.Provider
      value={{ isOpen, setIsOpen, searchHasFocus, setSearchHasFocus }}
    >
      {children}
    </MenuContext.Provider>
  )
}

DrawerContextProvider.propTypes = {
  children: PropTypes.node,
}

function useMenuContext() {
  return useContext(MenuContext)
}

export { DrawerContextProvider }

export default useMenuContext
