import PropTypes from 'prop-types'

export const dateFormats = ['date', 'time', 'datetime']
export const dateStyles = ['full', 'long', 'medium', 'short']

/**
 * Converts a date/string into a formatted one
 * (read more about format and styles here here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
 *
 * @param {string} datetime Timestamp, string
 * @param {string} format One of `date`, `time` or `datetime`
 * @param {object} style Options format the date
 * @param {array} locales Array with prefered locales. An empty array uses browser's default locale.
 *
 * @returns {string}
 */
export function dateTimeFormat(datetime, format, style = {}, locales = []) {
  const date = new Date(datetime)

  const { date: dateStyle = 'short', time: timeStyle = 'short' } = style

  switch (format) {
    case 'date':
      return date.toLocaleDateString(locales, { dateStyle })
    case 'time':
      return date.toLocaleTimeString(locales, { timeStyle })
    default: {
      return date.toLocaleString(locales, { dateStyle, timeStyle })
    }
  }
}

/**
 * DateTimeFormat to be used as a React Component
 *
 * @param {object} props
 */
export default function DateTimeFormat({ datetime, format, style, locales }) {
  return dateTimeFormat(datetime, format, style, locales)
}

DateTimeFormat.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  format: PropTypes.oneOf(dateFormats),
  style: PropTypes.shape({
    date: PropTypes.oneOf(dateStyles),
    time: PropTypes.oneOf(dateStyles),
  }),
  locales: PropTypes.array,
}
