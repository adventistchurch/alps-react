// Given a rule, wraps it in a media query
/**
 *
 * @param {string} rule - A CSS rule that can be wrapped
 * @param {string} query - A media query expressions (`min-width`, `max-with`, etc.)
 */
function wrapMediaQuery(rule, query) {
  return `
    ${query ? `@media(${query}) {` : ''}
      ${rule}
    ${query ? '}' : ''}
    `
}

/**
 * Returns a string of css rules wraped in queries for the provided media queries
 *
 * @param {function} rule - Function that returns a CSS rule as string
 * @param {Map} data - Map with data that will be used by `rule()` for a specific media query
 * @param {Map} mediaQueries - Map of media queries to be looped through
 */
function useResponsiveStyles(rule, data = {}, mediaQueries = {}) {
  const styles = Object.keys(mediaQueries).map(mq =>
    wrapMediaQuery(rule(data[mq]), mediaQueries[mq])
  )

  return styles.join('')
}

export default useResponsiveStyles
