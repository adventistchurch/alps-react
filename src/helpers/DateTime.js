import PropTypes from 'prop-types'
import { useMemo } from 'react'

export const dateModes = ['date', 'time', 'datetime']
export const dateFormats = ['full', 'long', 'medium', 'short']

/**
 * Converts a date/string into a formatted one
 * (read more about format and styles here here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat/DateTimeFormat)
 *
 * @param {string} datetime Timestamp, string
 * @param {string} mode One of `date`, `time` or `datetime`
 * @param {string} dateFormat Format for the date
 * @param {string} timeFormat Format for the time
 * @param {array} locales Array with prefered locales. An empty array uses browser's default locale.
 *
 * @returns {string}
 */
export function useDateTime(
  datetime,
  mode,
  dateFormat,
  timeFormat,
  locales = []
) {
  return useMemo(() => {
    const date = new Date(datetime)

    switch (mode) {
      case 'date':
        return date.toLocaleDateString(locales, { dateFormat })
      case 'time':
        return date.toLocaleTimeString(locales, { timeFormat })
      default: {
        return date.toLocaleString(locales, { dateFormat, timeFormat })
      }
    }
  }, [datetime, mode, dateFormat, timeFormat, locales])
}

/**
 * DateTime to be used as a React Component
 *
 * @param {object} props
 */
export default function DateTime({
  datetime,
  mode,
  dateStyle,
  timeStyle,
  locales,
}) {
  return useDateTime(datetime, mode, dateStyle, timeStyle, locales)
}

DateTime.propTypes = {
  /**
   * Date/time
   */
  datetime: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  /**
   * Date formatting mode
   */
  mode: PropTypes.oneOf(dateModes),
  /**
   * Date format
   */
  dateFormat: PropTypes.oneOf(dateFormats),
  /**
   * Time format
   */
  timeFormat: PropTypes.oneOf(dateFormats),
  /**
   * Locales
   */
  locales: PropTypes.array,
}
