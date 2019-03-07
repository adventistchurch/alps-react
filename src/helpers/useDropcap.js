import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'

function DefaultDropcap({ letter }) {
  return <span className="dropcap">{letter}</span>
}
DefaultDropcap.propTypes = {
  letter: PropTypes.string.isRequired,
}

function setDropcapInChildren(child, Dropcap, found = false, setFound = null) {
  const { children, ...otherProps } = child.props
  return cloneElement(child, {
    children: withChildren(children, Dropcap, found, setFound),
    ...otherProps,
  })
}

function withChildren(children, Dropcap, parentFound, setParentFound) {
  let found = parentFound

  // Inform siblings (and ancestors) that a canidate for dropcap has been found
  function setFound() {
    found = true
    if (setParentFound) setParentFound()
  }

  return React.Children.map(children, child => {
    // If still not found and is a string...
    if (!found && typeof child === 'string') {
      // Avoids strings with just empty spaces.
      if (!child.replace(/\s/g, '').length) return ''

      // Inform that we found it!
      setFound()

      // extract first characher and rest of text
      const firstChar = child[0]
      const rest = child.substring(1)

      // Return a span with aria label (for screen readers),
      // and the dropcap firstChar with the rest of text
      return (
        <span aria-label={child}>
          <Dropcap letter={firstChar} /> {rest}
        </span>
      )
    }

    // If child has prop, is because it's an element...
    if (child.props) {
      // ...and we need to look into its children for text
      return setDropcapInChildren(child, Dropcap, found, setFound)
    } else {
      // At this point, child should be another text, so we can return it
      return child
    }
  })
}

const defaults = {
  Dropcap: DefaultDropcap,
  enabled: true,
  tag: 'p',
}

function useDropcap(children, config = {}) {
  const { Dropcap, enabled, tag } = { ...defaults, ...config }

  // Return children directly if it's not enabled
  if (!enabled) return children

  let firstTag = false

  return React.Children.map(children, child => {
    // Look for first element that matches the tag (usually a <p>)
    if (!firstTag && child.type === tag) {
      // Inform we found one
      firstTag = true
      // Then look for and set the Dropcap whithin children
      return setDropcapInChildren(child, Dropcap)
    } else {
      // For the rest, just return the child
      return child
    }
  })
}

export default useDropcap
