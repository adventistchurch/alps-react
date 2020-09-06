import React from 'react'

import SubscribeForm from './SubscribeForm'

export default {
  title: 'ALPS/Molecules/Forms/SubscribeForm',
  component: SubscribeForm,
}

const SubscribeFormTemplate = props => <SubscribeForm {...props} />

export const Default = SubscribeFormTemplate.bind({})
Default.args = {
  title: 'Subscribe for Healthy Spam-Substitute',
}
