import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

const MenuContext = React.createContext({
  menuIsOpen: false,
  menuWithSearch: false,
  setMenuIsOpen: value => !value,
})

function MenuContextProvider({ children }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [menuWithSearch, setMenuWithSearch] = useState(false)

  return (
    <MenuContext.Provider
      value={{ menuIsOpen, setMenuIsOpen, menuWithSearch, setMenuWithSearch }}
    >
      {children}
    </MenuContext.Provider>
  )
}

MenuContextProvider.propTypes = {
  children: PropTypes.node,
}

function useMenuContext() {
  return useContext(MenuContext)
}

export { MenuContextProvider }

export default useMenuContext
