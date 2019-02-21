const baseClass = 'u-spacing'
const spacingSizes = ['quarter', 'half', 'double', 'triple', 'quad', 'zero']
const spacingSides = ['top', 'botton', 'left', 'right']

function mod(key) {
  return `${key ? `--${key}` : ''}`
}

function getSpacing({ size, side }) {
  return `${baseClass}${mod(size)}${mod(side)}`
}

export { spacingSizes, spacingSides }

export default getSpacing
