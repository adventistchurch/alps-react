export const sides = ['top', 'bottom', 'left', 'right']

export const vishiddenClass = 'is-vishidden'

function getMod(key) {
  return key ? `--${key}` : ''
}

export function getBaseClass(baseClass, mods = []) {
  return `${baseClass}${mods.map(mod => getMod(mod)).join('')}`
}
