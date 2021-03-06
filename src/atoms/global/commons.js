/**
 * Custom Configurations & methods
 */

// Common Sides
export const sides = ['top', 'bottom', 'left', 'right']

// Display
export const displayClass = 'u-display'
export const displayOptions = ['block', 'inline-block']
export const vishiddenClass = 'is-vishidden'
export const positionClass = 'u-position'
export const positionOptions = ['absolute', 'relative']
export const centerBlockClass = 'u-center-block'

// Common Functions:

function getMod(key) {
  return typeof key === 'string' ? `--${key}` : ''
}

export function getBaseClass(baseClass, mods = []) {
  const modifiers =
    typeof mods === 'string'
      ? getMod(mods)
      : mods.map(mod => getMod(mod)).join('')

  return `${baseClass}${modifiers}`
}
