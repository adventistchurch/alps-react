export const primaryColors = [
  'bluejay',
  'campfire',
  'cave',
  'denim',
  'earth',
  'emperor',
  'forest',
  'grapevine',
  'lily',
  'ming',
  'night',
  'scarlett',
  'treefrog',
  'velvet',
  'winter',
]

export const secondaryColors = ['', 'dark']

export const grayscaleColors = [
  'black',
  'gray--darker',
  'gray--dark',
  'gray',
  'gray--light',
  'white',
]

// Text Colors:

export const textColors = [
  'base',
  ...grayscaleColors,
  'black-transparent',
  'white-transparent',
]

// SVG Fill Colors

export const svgFillClass = 'u-path-fill'
export const svgFillColors = grayscaleColors

// Background Colors (grayscale)

export const backgroundClass = 'u-background-color'
export const backgroundColors = ['none', ...grayscaleColors]

// Theme Colors:

// - Foreground
export const themeForegroundClass = 'u-theme--color'
export const themeForegroundColors = [
  'base',
  'dark',
  'darker',
  'light',
  'lighter',
]

// - Background
export const themeBackgroundClass = 'u-theme--background-color'
export const themeBackgroundColors = themeForegroundColors
