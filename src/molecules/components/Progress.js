import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const baseStyle = {
  height: '5pt',
  transition: 'width .5s ease-out',
}

function useProgressStyle(percentage) {
  const [fakePercentage, setFakePercentage] = useState(0)

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

  return { width: `${percentage || fakePercentage}%`, ...baseStyle }
}

export default function Progress({ percentage }) {
  const innerStyle = useProgressStyle(percentage)

  return (
    <div className="u-theme--background-color--lighter" style={baseStyle}>
      <div className="u-theme--background-color--dark" style={innerStyle} />
    </div>
  )
}

Progress.propTypes = {
  percentage: PropTypes.number,
}
