import React from 'react'

import Intro from './Intro'

export default {
  title: 'ALPS/Atoms/Texts/Intro',
  component: Intro,
}

const IntroTemplate = props => <Intro {...props} />

export const Default = IntroTemplate.bind({})
Default.args = {
  text:
    'Fusce interdum purus est, vel semper ex tristique ut. Proin dapibus luctus pellentesque. Duis et sapien sit amet enim porttitor gravida at non orci. Proin dictum lobortis luctus. Sed sagittis massa id blandit aliquet.',
}

export const AsChildren = IntroTemplate.bind({})
AsChildren.args = {
  children:
    'Fusce interdum purus est, vel semper ex tristique ut. Proin dapibus luctus pellentesque. Duis et sapien sit amet enim porttitor gravida at non orci. Proin dictum lobortis luctus. Sed sagittis massa id blandit aliquet.',
}
