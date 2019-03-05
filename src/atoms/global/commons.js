/**
 * Custom Configurations & methods
 */

export const sides = ['top', 'bottom', 'left', 'right']

export const vishiddenClass = 'is-vishidden'

function getMod(key) {
  return key ? `--${key}` : ''
}

export function getBaseClass(baseClass, mods = []) {
  const modifiers =
    typeof mods === 'string'
      ? getMod(mods)
      : mods.map(mod => getMod(mod)).join('')

  return `${baseClass}${modifiers}`
}
