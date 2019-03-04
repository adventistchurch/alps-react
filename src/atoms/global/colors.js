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

const stateColors = ['valid', 'error', 'warning', 'information']

// Text Colors:
export const textColorClass = 'u-color'
export const textColors = [
  'base',
  ...grayscaleColors,
  'black-transparent',
  'white-transparent',
  ...stateColors,
]

// SVG Fill Colors

export const svgFillClass = 'u-path-fill'
export const svgFillColors = grayscaleColors

// Background Colors (grayscale)
export const backgroundColorClass = 'u-background-color'
export const backgroundColors = ['none', ...grayscaleColors]

// Theme Colors:

// - Foreground
export const themeColorClass = 'u-theme--color'
export const themeColors = ['base', 'dark', 'darker', 'light', 'lighter']

// - Background
export const themeBackgroundClass = 'u-theme--background-color'
export const themeBackgroundColors = [...themeColors]
export const themeBackgroundTransClass = `${themeBackgroundClass}-trans`
export const themeBackgroundTransColors = [...themeColors]

// - Border
export const themeBorderColorClass = 'u-theme--border-color'
export const themeBorderColors = [...themeColors]

// - Link
export const themeLinkHoverClass = 'u-theme--link-hover'

// - "Can be"
export const canBeClass = 'can-be'
export const canBeColors = [
  'dark-dark',
  'dark-light',
  'white',
  'light',
  'lighter',
]

// - Dark Theme
export const darkThemeClass = 'u-theme--dark'
