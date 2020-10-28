import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

export const sizes = {
  small: '3pt',
  medium: '5pt',
  large: '10pt',
}

function useBarStyle(visible, size) {
  return {
    height: visible ? sizes[size] : 0,
    transition: 'height .5s ease-out',
  }
}

function useProgressStyle(percentage, visible, size) {
  const [fakePercentage, setFakePercentage] = useState(0)
  const barStyle = useBarStyle(visible, size)

  useEffect(() => {
    let interval
    if (!percentage) {
      interval = setInterval(() => {
        if (fakePercentage < 100) {
          setFakePercentage(fakePercentage + 20)
        } else {
          clearInterval(interval)
        }
      }, 500)
    }
    return () => clearInterval(interval)
  }, [fakePercentage, percentage])

  return {
    width: `${percentage || fakePercentage}%`,
    transition: 'width .5s ease-out',
    ...barStyle,
  }
}

export default function Progress({ percentage, size, visible }) {
  const barStyle = useBarStyle(visible, size)
  const progressStyle = useProgressStyle(percentage, visible, size)

  return (
    <div className="u-theme--background-color--lighter" style={barStyle}>
      <div className="u-theme--background-color--dark" style={progressStyle} />
    </div>
  )
}

Progress.propTypes = {
  percentage: PropTypes.number,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  visible: PropTypes.bool,
}
Progress.defaultProps = {
  size: 'medium',
  visible: true,
}
