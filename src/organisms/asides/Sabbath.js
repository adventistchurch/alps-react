import React, { useCallback, useRef, useState } from 'react'
import PropTypes from 'prop-types'

import Icon, { iconNames } from '../../atoms/icons/Icon'
import { Div, DivWithRef } from '../../helpers/Element'
import InlineStyles from '../../helpers/InlineStyles'
import useDrawerContext from '../../helpers/useDrawerContext'
import useWindowEvent from '../../helpers/useWindowEvent'

const stickyBaseStyle = {
  zIndex: 99999,
  top: 0,
  position: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  right: 0,
  transition: 'none', // Disable ALPS CSS transision
}

function useStickyLogo(sticky, hideLogoOnTop) {
  const parentRef = useRef()
  const logoWrapRef = useRef()
  const logoInnerRef = useRef()
  const [logoHeight, setLogoHeight] = useState()
  const [logoLeft, setLogoLeft] = useState()
  const [logoMargin, setLogoMargin] = useState()
  const [logoInnerClass, setLogoInnerClass] = useState('')
  const [opacity, setOpacity] = useState()

  const onScroll = useCallback(() => {
    const parentElem = parentRef.current
    const logoInnerElem = logoInnerRef.current
    const logoWrapElem = logoWrapRef.current

    const { left: parentLeft } = parentElem.getBoundingClientRect()
    const { height: wrapMargin } = logoWrapElem.getBoundingClientRect()
    const { height } = logoInnerElem.getBoundingClientRect()

    setLogoMargin(wrapMargin)
    setLogoLeft(parentLeft)
    setLogoHeight(height)

    const vericalOffset = window.pageYOffset
    const headerHeight = 0

    // Calculate scroll percent
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement
    const winScroll = document.body.scrollTop || scrollTop
    const scrollPercent = winScroll / (scrollHeight - clientHeight)

    // Set opacity
    setOpacity(1 - scrollPercent)

    // Set inner logo visibiliy class when vertical offset is higher than header
    if (sticky && hideLogoOnTop) {
      const scrolling = vericalOffset > headerHeight
      setLogoInnerClass(scrolling ? 'is-visible' : 'is-hidden')
    }
  }, [hideLogoOnTop, sticky])

  useWindowEvent(['scroll', 'resize'], onScroll, 0)

  const opacityStyle = { opacity }

  const logoLightStyle = {
    ...opacityStyle,
    height: logoHeight,
  }

  const logoInnerStyle =
    sticky && logoHeight && logoLeft
      ? {
          ...stickyBaseStyle,
          height: logoHeight,
          left: logoLeft,
          marginTop: logoMargin,
          marginLeft: logoMargin,
          marginRight: logoMargin,
        }
      : {}

  return {
    opacityStyle,
    logoInnerClass,
    logoInnerRef,
    logoInnerStyle,
    logoLightStyle,
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
    logoInnerRef,
    logoWrapRef,
    parentRef,
  } = useStickyLogo(stickyLogo, hideLogoOnTop)

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
              ref={logoInnerRef}
              style={logoInnerStyle}
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
                className={`l-sabbath__logo--inner ${logoInnerClass}`}
                ref={logoInnerRef}
                style={logoInnerStyle}
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
