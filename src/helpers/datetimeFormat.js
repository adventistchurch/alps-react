import PropTypes from 'prop-types'

const DateTimeFormat = ({ date, dateFormat }) => {
  date = new Date(date)

  switch (dateFormat) {
    case 'date':
      return date.toLocaleDateString()
    case 'time':
      return date.toLocaleTimeString()
    default:
      return date.toLocaleString()
  }
}

DateTimeFormat.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  dateFormat: PropTypes.oneOf(['date', 'time', 'datetime']),
}

export default DateTimeFormat
