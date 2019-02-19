import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

const DrawerContext = React.createContext({
  closeDrawer: value => value,
  isOpen: { menu: false, search: false },
  openDrawer: value => value,
  openDrawerWithSearch: value => value,
})

const statuses = {
  closed: { menu: false, search: false },
  open: { menu: true, search: false },
  openSearch: { menu: true, search: true },
}

function DrawerContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(statuses.closed)

  function openDrawer(event) {
    event.preventDefault()
    setIsOpen(statuses.open)
  }

  function openDrawerWithSearch(event) {
    event.preventDefault()
    setIsOpen(statuses.openSearch)
  }

  function closeDrawer(event) {
    event.preventDefault()
    setIsOpen(statuses.closed)
  }

  return (
    <DrawerContext.Provider
      value={{
        closeDrawer,
        isOpen,
        openDrawer,
        openDrawerWithSearch,
      }}
    >
      {children}
    </DrawerContext.Provider>
  )
}

DrawerContextProvider.propTypes = {
  children: PropTypes.node,
}

function useDrawerContext() {
  return useContext(DrawerContext)
}

export { DrawerContextProvider }

export default useDrawerContext
