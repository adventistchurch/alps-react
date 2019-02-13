// Given a rule, wraps it in a media query
function wrapMediaQuery(rule, query) {
  return `
    ${query ? `@media(${query}) {` : ''}
      ${rule}
    ${query ? '}' : ''}
    `
}

// returns a string of css rules wraped in queries for the provided media queries
function useResponsiveStyles(rule, data = {}, mediaQueries = []) {
  const styles = Object.keys(mediaQueries).map(name => {
    const query = mediaQueries[name]
    return wrapMediaQuery(rule(data[name]), query)
  })

  return styles.join('')
}

export default useResponsiveStyles
