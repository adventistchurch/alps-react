import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import Icon, { iconNames } from '../../atoms/icons/Icon'
import InlineStyles from '../../helpers/InlineStyles'
import useDrawerContext from '../../helpers/useDrawerContext'
import useWindowEvent from '../../helpers/useWindowEvent'

const stickyBaseStyle = { zIndex: 99999, top: 0, position: 'fixed' }

function useStickyLogo(showLogoOnScroll) {
  const logoWrapRef = useRef()
  const logoRef = useRef()
  const [logoSize, setlogoSize] = useState(null)
  const [logoMarginTop, setLogoMarginTop] = useState()
  const [logoInnerClass, setLogoInnerClass] = useState()
  const [opacity, setOpacity] = useState()

  function onScroll() {
    const logoElem = logoRef.current
    const logoWrapElem = logoWrapRef.current

    const { height, width } = logoElem.getBoundingClientRect()

    setlogoSize({ height, width })

    if (logoWrapElem) {
      const { height: wrapHeight } = logoWrapElem.getBoundingClientRect()
      setLogoMarginTop(wrapHeight)
    }

    const vericalOffset = window.pageYOffset
    const headerHeight = 0 //'.c-header'.outerHeight()

    // Calculate scroll percent
    const winScroll =
      document.body.scrollTop || document.documentElement.scrollTop

    const scrollHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight

    const scrollpercent = winScroll / scrollHeight

    // Set opacity
    setOpacity(1 - scrollpercent)

    // Set inner logo visibiliy class when vertical offset is higher than header
    if (showLogoOnScroll) {
      const scrolling = vericalOffset > headerHeight
      setLogoInnerClass(scrolling ? 'is-visible' : 'is-hidden')
    }
  }

  useWindowEvent('scroll', onScroll, 0)

  const opacityStyle = { opacity }
  const stickyLogoStyle = logoSize
    ? { ...stickyBaseStyle, ...logoSize, marginTop: logoMarginTop }
    : null

  return {
    opacityStyle,
    stickyLogoStyle,
    logoInnerClass,
    logoRef,
    logoWrapRef,
  }
}

function Sabbath({
  backgroundImage,
  logo,
  showLogo,
  showLogoOnScroll,
  stickyLogo,
}) {
  const { openDrawer } = useDrawerContext()
  const {
    opacityStyle,
    stickyLogoStyle,
    logoInnerClass,
    logoRef,
    logoWrapRef,
  } = useStickyLogo(showLogoOnScroll)

  return (
    <aside
      className={`l-wrap__sabbath l-sabbath ${
        backgroundImage ? 'u-background-image--sabbath' : ''
      } ###js-toggle-menu###`} // TODO: replace js-toggle-menu
      onClick={openDrawer}
    >
      {backgroundImage ? (
        <>
          <InlineStyles
            styles={`.u-background-image--sabbath { background-image: url('${backgroundImage}') !important; }`}
          />
          {showLogo && (
            <div
              className="l-sabbath__logo u-path-fill--white"
              ref={logoRef}
              style={stickyLogo ? stickyLogoStyle : null}
            >
              <Icon name={logo} />
            </div>
          )}
        </>
      ) : (
        <>
          <div className="l-sabbath__logo" ref={logoWrapRef}>
            {showLogo && (
              <div
                className={`l-sabbath__logo--inner ${
                  stickyLogo ? logoInnerClass : ''
                }`}
                ref={logoRef}
                style={stickyLogo ? stickyLogoStyle : null}
              >
                <div
                  className="l-sabbath__logo-light u-path-fill--white"
                  style={opacityStyle}
                >
                  <Icon name={logo} />
                </div>
                <div className="l-sabbath__logo-dark u-theme--path-fill--base">
                  <Icon name={logo} />
                </div>
              </div>
            )}
          </div>
          <div
            className="l-sabbath__overlay u-theme--background-color--base"
            style={opacityStyle}
          />
        </>
      )}
    </aside>
  )
}

Sabbath.propTypes = {
  backgroundImage: PropTypes.string,
  logo: PropTypes.oneOf(iconNames),
  showLogo: PropTypes.bool,
  showLogoOnScroll: PropTypes.bool,
  stickyLogo: PropTypes.bool,
}
Sabbath.defaultProps = {
  showLogo: true,
  showLogoOnScroll: false,
  stickyLogo: false,
}

export default Sabbath
