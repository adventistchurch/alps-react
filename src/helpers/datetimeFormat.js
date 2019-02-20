import PropTypes from 'prop-types'

const dateFormats = ['date', 'time', 'datetime']

const dateTimeFormat = ({ date, dateFormat }) => {
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

dateTimeFormat.propTypes = {
  date: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  dateFormat: PropTypes.oneOf(dateFormats),
}

export { dateFormats }

export default dateTimeFormat
