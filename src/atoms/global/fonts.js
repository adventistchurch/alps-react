const sizes = ['xs', 's', 'm', 'l', 'xl']

const sizesMap = type => sizes.map(size => `font--${type}--${size}`)

const primary = sizesMap('primary')
const secondary = sizesMap('secondary')
const tertiary = sizesMap('tertiary')
const all = [...primary, ...secondary, ...tertiary]

export { primary, secondary, tertiary, all }
