const gridClass = 'l-grid'
const col = 'col'

const sevenClass = `${gridClass}--7-${col}`
const sevenInnerClass = `${sevenClass}--inner` // Class is available in CSS, but not not used in twig/json templates
const wrapClass = `${gridClass}-wrap`
const itemClass = `${gridClass}-item`

const shiftClass = 'u-shift'
const shiftSides = ['left', 'right']
const shiftBreakpoints = ['medium', 'standard', 'large', 'xxlarge']

const gridBreaks = ['standard', 'large']
const gridBreakClass = 'l-#-break'

const noGuttersClass = 'u-no-gutters'

const wrapRange = [1, 2, 3, 4, 5, 6, 7]
const wrapSizes = [
  ...wrapRange, // numeric versions
  ...wrapRange.map(ws => `${ws}`), // string versions
]

/**
 *  Examples:
 *    `getShiftClass('left','xxlarge') // 'u-shift--left--1-col--at-xxlarge'`
 *    `getShiftClass('right','standard') // 'u-shift--left--1-col--standard'`
 *
 * @param {string} side One of `shiftSides`
 * @param {string} at one of `shiftBreakpoints`
 *
 */
function getShiftClass(side, at) {
  return `${shiftClass}--${side}--1-${col}--${
    at === 'standard' ? at : `at-${at}`
  } ` // TODO: Ask if, to avoid this special case, `.u-shift--left--1-col--standard` is meant used, and if can be renamed to a more "standard" name like `.u-shift--left--1-col--at-standard` (note the added `at`).
}

function getGridWrapClass(size, noWrapClass) {
  return `${noWrapClass ? '' : wrapClass}${
    wrapSizes.includes(size) ? ` ${wrapClass}--${size}-of-7` : ''
  }`
}

function getGridClass({
  gridBreak,
  noGridClass,
  noGutters,
  noWrapClass,
  seven,
  sevenInner,
  shiftAt,
  shiftSide,
  wrap,
}) {
  const classes = []

  if (!noGridClass) classes.push(gridClass)
  if (seven) classes.push(sevenClass)
  if (sevenInner) classes.push(sevenInnerClass)
  if (noGutters) classes.push(noGuttersClass)
  if (gridBreak) classes.push(gridBreakClass.replace('#', gridBreak))
  if (wrap) classes.push(getGridWrapClass(wrap, noWrapClass))
  if (shiftSide && shiftAt) classes.push(getShiftClass(shiftSide, shiftAt))

  return classes
}

function getGridItemClass({
  noItemClass,
  size,
  sizeAtL,
  sizeAtM,
  sizeAtS,
  sizeAtXL,
}) {
  const classes = []

  if (!noItemClass) classes.push(itemClass)

  const sizes = []

  if (size) sizes.push({ size }) // default "at" would be "xs", but it's not present in ALPS
  if (sizeAtS) sizes.push({ size: sizeAtS, at: 's' })
  if (sizeAtM) sizes.push({ size: sizeAtM, at: 'm' })
  if (sizeAtL) sizes.push({ size: sizeAtL, at: 'l' })
  if (sizeAtXL) sizes.push({ size: sizeAtXL, at: 'xl' })

  for (const { at, size } of sizes) {
    if (wrapSizes.includes(size)) {
      classes.push(`${itemClass}${at ? `--${at}` : ''}--${size}-${col}`)
    }
  }

  return classes
}

export {
  gridBreaks,
  getGridClass,
  getGridItemClass,
  getGridWrapClass,
  sevenClass,
  shiftBreakpoints,
  shiftSides,
  wrapSizes,
}
