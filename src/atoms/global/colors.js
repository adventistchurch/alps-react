const primary = [
  'treefrog',
  'ming',
  'bluejay',
  'iris',
  'lily',
  'scarlett',
  'campfire',
  'winter',
  'forest',
  'cave',
  'denim',
  'emperor',
  'grapevine',
  'velvet',
  'earth',
  'night',
]

const secondary = ['', 'dark']

const grayscaleColors = [
  'black',
  'gray--darker',
  'gray--dark',
  'gray',
  'gray--light',
  'white',
]

// Utils

const generateColors = (prefix, colors) =>
  colors.map(color => `${prefix}--${color}`)

// Text Colors:

const textClass = 'u-color'
const textColors = [
  ...grayscaleColors,
  'black-transparent',
  'white-transparent',
]
const text = generateColors(textClass, textColors)

// SVG Fill Colors

const svgFillClass = 'u-path-fill'
const svgFillColors = grayscaleColors
// const svgFill = generateColors(svgFillClass, svgFillColors)

// Background Colors (grayscale)

const backgroundClass = 'u-background-color'
const backgroundColors = ['none', ...grayscaleColors]
const background = generateColors(backgroundClass, backgroundColors)

// Theme Colors

const themeColors = primary
const theme = generateColors(backgroundClass, themeColors)

// Exports

export {
  background,
  primary,
  secondary,
  svgFillClass,
  svgFillColors,
  text,
  theme,
}
