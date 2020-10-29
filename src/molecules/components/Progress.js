import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const sizes = {
  hairline: '1pt',
  small: '3pt',
  medium: '5pt',
  large: '10pt',
  huge: '16pt',
}

const widthTransition = 'width .5s ease-out'
const heightTransition = 'height .3s ease-out'

function useBarStyle(
  visible,
  size,
  fixed = false,
  style = {},
  transition = heightTransition
) {
  const fixedProps = fixed
    ? { position: 'fixed', top: 0, left: 0, right: 0, zIndex: 999999 }
    : {}

  return {
    ...fixedProps,
    height: visible ? sizes[size] : 0,
    transition: transition,
    ...style,
  }
}

function useProgressStyle(percentage, visible, size) {
  const [fakePercentage, setFakePercentage] = useState(0)
  const barStyle = useBarStyle(
    visible,
    size,
    false,
    {},
    `${widthTransition}, ${heightTransition}`
  )

  const isPercentageSet =
    percentage !== null && percentage !== undefined && percentage !== ''

  useEffect(() => {
    let interval
    if (isPercentageSet) {
      setFakePercentage(0)
      clearInterval(interval)
    } else {
      interval = setInterval(() => {
        if (fakePercentage < 100) {
          setFakePercentage(fakePercentage + 20)
        } else {
          clearInterval(interval)
        }
      }, 500)
    }
    return () => clearInterval(interval)
  }, [fakePercentage, isPercentageSet])

  return {
    width: `${
      isPercentageSet ? (percentage > 100 ? 100 : percentage) : fakePercentage
    }%`,
    ...barStyle,
  }
}

export default function Progress({ fixed, percentage, size, visible, style }) {
  const barStyle = useBarStyle(visible, size, fixed, style)
  const progressStyle = useProgressStyle(percentage, visible, size)

  return (
    <div className="u-theme--background-color--lighter" style={barStyle}>
      <div className="u-theme--background-color--dark" style={progressStyle} />
    </div>
  )
}

Progress.propTypes = {
  fixed: PropTypes.bool,
  percentage: PropTypes.number,
  size: PropTypes.oneOf(['hairline', 'small', 'medium', 'large', 'huge']),
  style: PropTypes.object,
  visible: PropTypes.bool,
}
Progress.defaultProps = {
  size: 'medium',
  visible: true,
}
