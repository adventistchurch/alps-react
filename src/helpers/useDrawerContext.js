import React, { useState, useContext } from 'react'
import PropTypes from 'prop-types'

const DrawerContext = React.createContext({
  closeDrawer: value => value,
  isOpen: { menu: false, search: false },
  openDrawer: event => console.log(event),
  openDrawerWithSearch: event => console.log(event),
})

const statuses = {
  closed: { menu: false, search: false },
  open: { menu: true, search: false },
  openSearch: { menu: true, search: true },
}

function DrawerContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(statuses.closed)
  const [openSubNav, setOpenSubNav] = useState(null)

  function openDrawer(event) {
    event.preventDefault()
    console.log('openDrawer', event)
    setIsOpen(statuses.open)
  }

  function openDrawerWithSearch(event) {
    event.preventDefault()
    console.log('openDrawerWithSearch', event)
    setIsOpen(statuses.openSearch)
  }

  function closeDrawer(event) {
    event.preventDefault()
    console.log('closeDrawer', event)
    setIsOpen(statuses.closed)
  }

  return (
    <DrawerContext.Provider
      value={{
        closeDrawer,
        isOpen,
        openDrawer,
        openDrawerWithSearch,
        openSubNav,
        setOpenSubNav,
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
