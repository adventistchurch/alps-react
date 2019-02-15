const sizes = ['xs', 's', 'm', 'l', 'xl', 'xxl']

const sizesMap = type => sizes.map(size => `u-font--${type}--${size}`)

const primary = sizesMap('primary')
const secondary = sizesMap('secondary')
const all = [...primary, ...secondary]

export { all, primary, secondary, sizes }
