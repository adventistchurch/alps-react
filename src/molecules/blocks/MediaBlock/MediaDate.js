import React from 'react'
import PropTypes from 'prop-types'

import datetimeFormat from '../../../helpers/datetimeFormat'

const MediaDate = ({ datetime, dateFormat }) => (
  <time className="c-block__date u-text-transform--upper" dateTime={datetime}>
    {datetimeFormat({ date: datetime, dateFormat: dateFormat })}
  </time>
)

MediaDate.propTypes = {
  datetime: PropTypes.number.isRequired,
  dateFormat: PropTypes.oneOf(['date', 'time', 'datetime']),
}

export default MediaDate
