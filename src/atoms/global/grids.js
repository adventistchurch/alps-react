const gridClass = 'l-grid'

export const sevenClass = `${gridClass}--7-col`
const sevenInnerClass = `${sevenClass}--inner` // Class is available in CSS, but not not used in twig/json templates
const wrapClass = `${gridClass}-wrap`
const itemClass = `${gridClass}-item`

const shiftClass = 'u-shift'
export const shiftBreakpoints = [
  'medium',
  'standard',
  'large',
  'xlarge',
  'xxlarge',
]

export const gridBreaks = ['standard', 'large']
const gridBreakClass = 'l-#-break'

const blockRowClass = 'l-section__block-row'

const noGuttersClass = 'u-no-gutters'

const wrapRange = [1, 2, 3, 4, 5, 6, 7]
export const wrapSizes = [
  ...wrapRange, // numeric versions
  ...wrapRange.map(ws => `${ws}`), // string versions
]

/**
 *  Examples:
 *    `getShiftClass('left','xxlarge') // => 'u-shift--left--1-col--at-xxlarge'`
 *    `getShiftClass('right','standard') // => 'u-shift--right--1-col--standard'`
 *
 * @param {string} side One of ['left', 'right']
 * @param {string} at one of `shiftBreakpoints`
 *
 */
function getShiftClass(side, at) {
  return `${shiftClass}--${side}--1-col--${at === 'standard' ? at : `at-${at}`}`
}

export function getGridWrapClass(size, noWrapClass) {
  return `${noWrapClass ? '' : wrapClass}${
    wrapSizes.includes(size) ? ` ${wrapClass}--${size}-of-7` : ''
  }`
}

function getBlockRowClass() {
  return `${blockRowClass} ${blockRowClass}--6-col`
}

export function getGridClass({
  gridBreak,
  noGridClass,
  noGutters,
  noWrapClass,
  blockRow,
  seven,
  sevenInner,
  shiftLeftAt,
  shiftRightAt,
  wrap,
}) {
  const classes = []

  if (!noGridClass) classes.push(gridClass)
  if (seven) classes.push(sevenClass)
  if (sevenInner) classes.push(sevenInnerClass)
  if (noGutters) classes.push(noGuttersClass)
  if (gridBreak) classes.push(gridBreakClass.replace('#', gridBreak))
  if (blockRow) classes.push(getBlockRowClass())
  if (wrap) classes.push(getGridWrapClass(wrap, noWrapClass))
  if (shiftLeftAt) classes.push(getShiftClass('left', shiftLeftAt))
  if (shiftRightAt) classes.push(getShiftClass('right', shiftRightAt))

  return classes
}

export function getGridItemClass({
  noItemClass,
  size,
  sizeAtL,
  sizeAtM,
  sizeAtS,
  sizeAtXL,
  sizeAtXXL,
}) {
  const classes = []

  if (!noItemClass) classes.push(itemClass)

  const sizes = []

  if (size) sizes.push({ size }) // default "at" would be "xs", but it's not present in ALPS
  if (sizeAtS) sizes.push({ size: sizeAtS, at: 's' })
  if (sizeAtM) sizes.push({ size: sizeAtM, at: 'm' })
  if (sizeAtL) sizes.push({ size: sizeAtL, at: 'l' })
  if (sizeAtXL) sizes.push({ size: sizeAtXL, at: 'xl' })
  if (sizeAtXL) sizes.push({ size: sizeAtXXL, at: 'xxl' })

  for (const { at, size } of sizes) {
    if (wrapSizes.includes(size)) {
      classes.push(`${itemClass}${at ? `--${at}` : ''}--${size}-col`)
    }
  }

  return classes
}
