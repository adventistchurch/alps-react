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

const secondary = ['white', 'dark']

const theme = {
  primary: {
    fill: 'theme--primary-fill-color',
    text: 'theme--primary-text-color',
  },
  secondary: {
    fill: 'theme--secondary-fill-color',
    text: 'theme--secondary-text-color',
  },
}

const fill = [
  'fill--blue',
  'fill--light-brown',
  'fill--gray',
  'fill--white',
  theme.primary.fill,
  theme.secondary.fill,
]

const background = ['black', 'white']

export { primary, secondary, theme, fill, background }
