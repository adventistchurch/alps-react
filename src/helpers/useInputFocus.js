import { useEffect, useRef } from 'react'

/**
 *
 * @param {Boolean} hasFocus
 *
 * @returns inputRef
 */
function useInputFocus(hasFocus) {
  const inputRef = useRef(null)
  const input = inputRef.current

  const focusTimeout = setTimeout(() => {
    if (hasFocus) {
      input && input.focus()
    } else {
      input && input.blur()
    }
  }, 250)

  useEffect(() => () => clearTimeout(focusTimeout), [focusTimeout])

  return inputRef
}

export default useInputFocus
