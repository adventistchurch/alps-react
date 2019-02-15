import React, { useState } from 'react'
import PropTypes from 'prop-types'

// import LoadScript from './helpers/LoadScript'

const MenuContext = React.createContext({
  menuIsOpen: false,
  menuWithSearch: false,
  setMenuIsOpen: value => !value,
})

function Wrapper({ children, primaryColor, secondaryColor, style }) {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const [menuWithSearch, setMenuWithSearch] = useState(false)
  return (
    <MenuContext.Provider
      value={{ menuIsOpen, setMenuIsOpen, menuWithSearch, setMenuWithSearch }}
    >
      <div className={`u-theme--${primaryColor}`} style={style}>
        <div className={`body has-grid u-theme--${secondaryColor}`}>
          {children}
        </div>
        {/* <LoadScript url="https://code.jquery.com/jquery-2.2.4.min.js" /> */}
        {/* <LoadScript url="//cdn.adventist.org/alps/3/latest/js/script.min.js" /> */}
      </div>
    </MenuContext.Provider>
  )
}

Wrapper.propTypes = {
  children: PropTypes.node,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  style: PropTypes.object,
}
Wrapper.defaultProps = {
  primaryColor: 'ming',
  secondaryColor: '',
}

export { MenuContext }

export default Wrapper
