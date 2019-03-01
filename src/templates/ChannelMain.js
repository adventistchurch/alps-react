import React from 'react'

import BasicPage from './BasicPage'

function ChannelMain({ ...props }) {
  return <BasicPage {...props} />
}

ChannelMain.propTypes = {
  ...BasicPage.props,
}

export default ChannelMain
