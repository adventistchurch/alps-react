import React from 'react'

import Text from './Text'

export default {
  title: 'ALPS/Atoms/Texts/Text',
  component: Text,
}

const TextTemplate = ({ children, ...props }) => {
  return (
    <Text {...props}>
      <p>{children}</p>
    </Text>
  )
}

export const Default = TextTemplate.bind({})
Default.args = {
  children:
    'Fusce interdum purus est, vel semper ex tristique ut. Proin dapibus luctus pellentesque. Duis et sapien sit amet enim porttitor gravida at non orci. Proin dictum lobortis luctus. Sed sagittis massa id blandit aliquet.',
}

export const WithDropcap = ({ ...props }) => {
  return (
    <Text {...props}>
      <p>
        <strong>Fusce</strong> interdum purus est, vel semper ex tristique ut.
        Proin dapibus luctus pellentesque. Duis et sapien sit amet enim
        porttitor gravida at non orci. Proin dictum lobortis luctus. Sed
        sagittis massa id blandit aliquet.
      </p>
    </Text>
  )
}
WithDropcap.args = {
  hasDropcap: true,
}
