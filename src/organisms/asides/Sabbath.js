import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import Icon, { iconNames } from '../../atoms/icons/Icon'
import { Div, DivWithRef } from '../../helpers/Element'
import InlineStyles from '../../helpers/InlineStyles'
import useDrawerContext from '../../helpers/useDrawerContext'
import useWindowEvent from '../../helpers/useWindowEvent'

const stickyBaseStyle = { zIndex: 99999, top: 0, position: 'fixed' }

function useStickyLogo(hideLogoOnTop) {
  const parentRef = useRef()
  const logoWrapRef = useRef()
  const logoRef = useRef()
  const [logoSize, setLogoSize] = useState(null)
  const [logoMarginTop, setLogoMarginTop] = useState()
  const [logoInnerClass, setLogoInnerClass] = useState('')
  const [opacity, setOpacity] = useState()

  const onScroll = useCallback(() => {
    const parentElem = parentRef.current
    const logoElem = logoRef.current
    const logoWrapElem = logoWrapRef.current

    const { width: parentWidth } = parentElem.getBoundingClientRect()

    const { height } = logoElem.getBoundingClientRect()

    setLogoSize({ height, width: parentWidth - 40 })

    const { height: wrapHeight } = logoWrapElem.getBoundingClientRect()

    setLogoMarginTop(wrapHeight)

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
    if (hideLogoOnTop) {
      const scrolling = vericalOffset > headerHeight
      setLogoInnerClass(scrolling ? 'is-visible' : 'is-hidden')
    }
  }, [])

  useWindowEvent(['scroll', 'resize'], onScroll)

  const opacityStyle = { opacity }
  const logoLightStyle = { ...opacityStyle, ...logoSize }
  const logoInnerStyle = logoSize
    ? { ...stickyBaseStyle, ...logoSize, marginTop: logoMarginTop }
    : null

  return {
    opacityStyle,
    logoInnerStyle,
    logoSize,
    logoLightStyle,
    logoInnerClass,
    logoRef,
    logoWrapRef,
    parentRef,
  }
}

function Sabbath({
  backgroundImage,
  logo,
  showLogo,
  hideLogoOnTop,
  stickyLogo,
}) {
  const { openDrawer } = useDrawerContext()
  const {
    opacityStyle,
    logoInnerStyle,
    logoInnerClass,
    logoLightStyle,
    logoRef,
    logoWrapRef,
    parentRef,
  } = useStickyLogo(hideLogoOnTop)

  return (
    <aside
      className={`l-wrap__sabbath l-sabbath ${
        backgroundImage ? 'u-background-image--sabbath' : ''
      }`}
      onClick={openDrawer}
      ref={parentRef}
    >
      {backgroundImage ? (
        <>
          <InlineStyles
            styles={`.u-background-image--sabbath { background-image: url('${backgroundImage}') !important; }`}
          />
          {showLogo && (
            <DivWithRef
              className="l-sabbath__logo"
              pathFill="white"
              ref={logoRef}
              style={stickyLogo ? logoInnerStyle : null}
            >
              <Icon name={logo} />
            </DivWithRef>
          )}
        </>
      ) : (
        <>
          <DivWithRef className="l-sabbath__logo" ref={logoWrapRef}>
            {showLogo && (
              <DivWithRef
                className={`l-sabbath__logo--inner ${
                  stickyLogo ? logoInnerClass : ''
                }`}
                ref={logoRef}
                style={stickyLogo ? logoInnerStyle : null}
              >
                <Div
                  className="l-sabbath__logo-light"
                  pathFill="white"
                  style={logoLightStyle}
                >
                  <Icon name={logo} />
                </Div>
                <Div className="l-sabbath__logo-dark" themePathFill="base">
                  <Icon name={logo} />
                </Div>
              </DivWithRef>
            )}
          </DivWithRef>
          <Div
            className="l-sabbath__overlay"
            style={opacityStyle}
            themeBackground="base"
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
  hideLogoOnTop: PropTypes.bool,
  stickyLogo: PropTypes.bool,
}
Sabbath.defaultProps = {
  showLogo: true,
  hideLogoOnTop: false,
  stickyLogo: true,
}

export default Sabbath
