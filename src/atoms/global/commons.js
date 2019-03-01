export const sides = ['top', 'bottom', 'left', 'right']

function getMod(key) {
  return key ? `--${key}` : ''
}

export function getBaseClass(baseClass, mods = []) {
  return `${baseClass}${mods.map(mod => getMod(mod)).join('')}`
}
