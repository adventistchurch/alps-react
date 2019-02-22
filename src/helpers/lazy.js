// NOTE: This code is not being used as it was buggy and we replaced it with `react-lazyload`
// TODO: Consider fix these bugs, so `react-lazyload` dependency can be removed

const defaults = {
  src: 'data-src',
  srcSet: 'data-srcset',
}

const observerConf = {
  root: null,
  rootMargin: '0px',
  threshold: [0],
}

/**
 *
 * @param {*} elem Element to swap attributes
 * @param {*} settings Object with attributes names from where obtain source values
 */
function swapAttributes(element, settings = {}) {
  const elementTag = element.tagName.toLowerCase()
  const src = element.getAttribute(settings.src)
  const srcSet = element.getAttribute(settings.srcSet)

  switch (elementTag) {
    // if is a `img`
    case 'img':
      // swap attributes
      if (src) element.src = src
      if (srcSet) element.srcset = srcSet
      break

    // or `source`
    case 'source':
      // swap attributes
      if (srcSet) element.srcset = srcSet
      break

    // Otherwise,
    default:
      // set the elementent's background image
      element.style.backgroundImage = `url(${src})`
      break
  }
}

/**
 *
 * @param {HTMLElement} element Element that will observed
 * @param {Map} settings Object with attributes names from where obtain source values. Defaults: `src`: `'data-src'`, `srcSet`: `'data-srcset'`.
 */
function lazy(element, settings = {}) {
  const config = { ...defaults, ...settings }

  // If browser doesn't supports IntersectionObserver API...
  if (!IntersectionObserver) {
    // Just swap the attributes and
    swapAttributes(element, config)
    return
  }

  // If it does, Initialize the observer
  const observer = new IntersectionObserver(
    entries =>
      entries.forEach(entry => {
        // If image is visible
        if (entry.intersectionRatio > 0) {
          const elem = entry.target

          // Stop Observing, as is no longer required
          observer.unobserve(elem)

          // Swap element's attributes
          swapAttributes(elem, config)
        }
      }),
    observerConf
  )

  return observer.observe(element)
}

export default lazy
