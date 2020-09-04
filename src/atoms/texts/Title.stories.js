import React from 'react'

import Title from './Title'

export default {
  title: 'ALPS/Atoms/Texts/Title',
  component: Title,
}

const TitleTemplate = ({ children, ...props }) => {
  return (
    <Title {...props}>
      <p>{children}</p>
    </Title>
  )
}

export const Default = TitleTemplate.bind({})
Default.args = {
  text: 'Sed sagittis massa id blandit aliquet',
}

export const WithChildren = TitleTemplate.bind({})
WithChildren.args = {
  children: 'Sed sagittis massa id blandit aliquet',
}

export const WithKicker = TitleTemplate.bind({})
WithKicker.args = {
  ...Default.args,
  kicker: 'Expedita veritatis',
}
