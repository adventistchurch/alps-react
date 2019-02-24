const gridClass = 'l-grid'
const col = 'col'

const sevenClass = `${gridClass}--7${col}`
const sevenInnerClass = `${sevenClass}--inner` // Class is available in CSS, but not not used in twig/json templates
const wrapClass = `${gridClass}-wrap`
const itemClass = `${gridClass}-item`

const shiftClass = 'u-shift'
const shiftSides = ['left', 'right']
const shiftBreakpoints = ['at-medium', 'standard', 'at-large', 'at-xxlarge']

const noGuttersClass = 'u-no-gutters'

function validSize(size) {
  const intSize = size ? parseInt(size) : 0
  return intSize > 0 && intSize <= 7
}

// Example: {side: 'left', breakpoint: 'at-xxlarge'} => 'u-shift--left--1-col--at-xxlarge'
function getShiftClass({ side, breakpoint }) {
  return side && breakpoint
    ? `${shiftClass}--${side}--1-${col}--${breakpoint}`
    : ''
}

function getGridWrapClass({ shift = null, size }) {
  return `${wrapClass} ${
    validSize(size) ? `${wrapClass}--${size}-of-7` : ''
  } ${getShiftClass(shift)}`
}

function getGridClass({
  className,
  noGutters,
  seven,
  sevenInner,
  shift,
  wrap,
}) {
  const classes = [gridClass]

  if (className) classes.push(className)
  if (seven) classes.push(sevenClass)
  if (sevenInner) classes.push(sevenInnerClass)
  if (noGutters) classes.push(noGuttersClass)
  if (wrap) classes.push(getGridWrapClass(shift))
  if (shift) classes.push(getShiftClass(wrap))

  return classes.join(' ')
}

function getGridItemClass({
  className,
  size,
  sizeAtL,
  sizeAtM,
  sizeAtS,
  sizeAtXL,
}) {
  const classes = [itemClass]

  const sizes = []

  if (size) sizes.push({ size }) // default "at" would be "xs", but it's not present in ALPS
  if (sizeAtS) sizes.push({ size: sizeAtS, at: 's' })
  if (sizeAtM) sizes.push({ size: sizeAtM, at: 'm' })
  if (sizeAtL) sizes.push({ size: sizeAtL, at: 'l' })
  if (sizeAtXL) sizes.push({ size: sizeAtXL, at: 'xl' })

  for (const { at, size } of sizes) {
    classes.push(
      `${itemClass}${at ? `--${at}` : ''}--${
        validSize(size) ? `${size}-${col}` : ''
      }`
    )
  }

  if (className) classes.push(className)

  return classes.join(' ')
}

export {
  getGridClass,
  getGridItemClass,
  getGridWrapClass,
  sevenClass,
  shiftBreakpoints,
  shiftSides,
}
