import React from 'react'

import Comment from './Comment'

export default {
  title: 'ALPS/Molecules/Components/Comment',
  component: Comment,
}

const CommentTemplate = props => <Comment {...props} />

export const Default = CommentTemplate.bind({})
Default.args = {
  avatar: '//picsum.photos/50/50',
  byline: 'Bob Smith',
  bylineLink: '#Bob-Smith',
  date: '2020-10-26 12:34:56',
  text:
    'Vivamus sollicitudin ipsum vel rutrum facilisis. Vestibulum eu cursus massa. Donec faucibus velit eu enim dapibus, sed scelerisque nibh finibus. Praesent imperdiet, leo ut ullamcorper facilisis, felis neque vestibulum mi, in vehicula turpis libero vestibulum eros. Nunc ac lectus id dui eleifend dignissim.',
}
