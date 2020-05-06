import React, { useContext } from 'react'
import PropTypes from 'prop-types'

const FormContext = React.createContext()

function FormContextProvider({ darkMode, labelPosition, children }) {
  return (
    <FormContext.Provider
      value={{
        darkMode,
        labelPosition,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

FormContextProvider.propTypes = {
  darkMode: PropTypes.bool,
  children: PropTypes.node,
  labelPosition: PropTypes.string,
}
FormContextProvider.defaultProos = {
  dark: false,
  labelPosition: 'bottom',
}

function useFormContext() {
  return useContext(FormContext)
}

export { FormContextProvider }

export default useFormContext
