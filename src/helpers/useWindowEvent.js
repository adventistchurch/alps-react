import { useEffect } from 'react'

import debounce from './debounce'

/**
 * Hook that runs a callback during window's resize event (debounced)
 *
 * @param {String} event Window event name (`resize`, `scroll`, etc.)
 * @param {Function} callback Funtion to be called in event
 * @param {Number} wait Time to wait for run the callback again (in milliseconds)
 * @param {Boolean} inmediate Should callback be run at start
 */
function useWindowEvent(event, callback, wait = 100, inmediate = false) {
  // if wait is not 0, set a debounced version of callback
  const debouncedCallback = wait > 0 ? debounce(callback, wait) : callback

  useEffect(() => {
    // If window is not available (SSR), or event nor callback are not present, bail out
    if (!window || !event || !callback) return () => null

    // Inmediate run
    inmediate && callback()

    // Set the event listener
    window.addEventListener(event, debouncedCallback)

    // Cleanup listener on unmount
    return () => window.removeEventListener(event, debouncedCallback)
  }, [])
}

export default useWindowEvent
