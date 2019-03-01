import React from 'react'

import Button from '../../../atoms/buttons/Button'

function SubmitButton({ vishidden, ...props }) {
  return <Button vishidden={vishidden} {...props} />
}

SubmitButton.propTypes = {
  ...Button.propTypes,
}
SubmitButton.defaultProps = {
  vishidden: true,
}

export default SubmitButton
