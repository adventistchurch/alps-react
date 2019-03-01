import React from 'react'
import PropTypes from 'prop-types'

import Title from '../../../atoms/texts/Title'

function FormTitle({ darkMode, text, type }) {
  return type == 'primary' ? (
    <Title
      color={darkMode ? 'white' : null}
      fontSize="l"
      strong
      text={text}
      themeColor={darkMode ? null : 'darker'}
    />
  ) : (
    <Title
      as="h3"
      fontType="secondary"
      spacing={true}
      strong
      text={text}
      themeColor={darkMode ? 'lighter' : 'base'}
      transform="upper"
    />
  )
}

FormTitle.propTypes = {
  darkMode: PropTypes.bool,
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['primary', 'secondary']),
}
FormTitle.defaultProps = {
  type: 'primary',
}

export default FormTitle
