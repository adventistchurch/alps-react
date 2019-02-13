import { useState } from 'react'

/**
 * Hook to toggle boolean value
 *
 * @param {boolean} initial - Default toggle value
 */
function useToggle(initial = false) {
  const [value, setValue] = useState(initial)

  function toggle() {
    setValue(!value)
  }

  return [value, toggle]
}

export default useToggle
