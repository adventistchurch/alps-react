const primary = ['emperor', 'earth', 'grapevine', 'denim', 'campfire']

const secondary = ['warm', 'cool']

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

export { primary, secondary, theme, fill }
