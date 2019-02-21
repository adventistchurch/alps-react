import PropTypes from 'prop-types'

const dateFormats = ['date', 'time', 'datetime']

/**
 * Converts a date/string into a formatted one
 *
 * @param {String} datetime Timestamp, String
 * @param {String} format One of `date`, `time` or `datetime`
 *
 * @returns {String}
 */
function dateTimeFormat(datetime, format) {
  const date = new Date(datetime)

  switch (format) {
    case 'date':
      return date.toLocaleDateString()
    case 'time':
      return date.toLocaleTimeString()
    default:
      return date.toLocaleString()
  }
}

/**
 * DateTimeFormat to be used as a React Component
 *
 * @param {object} props
 */
function DateTimeFormat({ datetime, format }) {
  return dateTimeFormat(datetime, format)
}

DateTimeFormat.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  dateFormat: PropTypes.oneOf(dateFormats),
}

export { dateFormats, dateTimeFormat }

export default DateTimeFormat
