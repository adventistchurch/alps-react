import React from 'react'

import InlineForm from './InlineForm'

export default {
  title: 'ALPS/Molecules/Forms/InlineForm',
  component: InlineForm,
}

const InlineFormTemplate = props => <InlineForm {...props} />

export const Default = InlineFormTemplate.bind({})
Default.args = {
  submitLabel: 'Submit',
}
