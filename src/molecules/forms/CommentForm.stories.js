import React from 'react'

import CommentForm from './CommentForm'

export default {
  title: 'ALPS/Molecules/Forms/CommentForm',
  component: CommentForm,
}

const CommentFormTemplate = props => <CommentForm {...props} />

export const Default = CommentFormTemplate.bind({})
Default.args = {
  title: 'Leave a comment',
  submitLabel: 'Post comment',
  numberOfRows: 8,
}
