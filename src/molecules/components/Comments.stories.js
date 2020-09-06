import React from 'react'

import Comments from './Comments'

const comments = [
  {
    avatar: '//picsum.photos/50/50',
    byline: 'Bob Smith',
    bylineLink: '#Bob-Smith',
    date: '2020-10-26 12:34:56',
    text: 'Vivamus sollicitudin ipsum vel rutrum facilisis.',
  },
  {
    avatar: '//picsum.photos/50/50',
    byline: 'John Doe',
    bylineLink: '#John-Doe',
    date: '2020-10-20 12:34:56',
    text:
      'Donec faucibus velit eu enim dapibus, sed scelerisque nibh finibus. Praesent imperdiet, leo ut ullamcorper facilisis, felis neque vestibulum mi, in vehicula turpis libero vestibulum eros. Nunc ac lectus id dui eleifend dignissim.',
  },
  {
    avatar: '//picsum.photos/50/50',
    byline: 'Jack Sparrow',
    bylineLink: '#Jack-Sparrow',
    date: '2020-10-12 12:34:56',
    text: 'Vestibulum eu cursus massa.',
  },
]

export default {
  title: 'ALPS/Molecules/Components/Comments',
  component: Comments,
}

const CommentsTemplate = props => <Comments {...props} />

export const Default = CommentsTemplate.bind({})
Default.args = {
  items: comments,
}

export const Expanded = CommentsTemplate.bind({})
Expanded.args = {
  ...Default.args,
  expanded: true,
}

export const WithCustomHeading = CommentsTemplate.bind({})
WithCustomHeading.args = {
  ...Default.args,
  heading: 'Latest Comments',
}
