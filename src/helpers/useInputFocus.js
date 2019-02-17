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

  let focusTimeout

  useEffect(
    function() {
      if (input) {
        focusTimeout = setTimeout(function() {
          if (hasFocus) {
            input.focus()
          } else {
            input.blur()
          }
        }, 250)
      }

      return () => clearTimeout(focusTimeout)
    },
    [hasFocus]
  )

  return inputRef
}

export default useInputFocus
