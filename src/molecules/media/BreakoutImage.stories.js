import React from 'react'

import BreakoutImage from './BreakoutImage'

export default {
  title: 'ALPS/Molecules/Media/BreakoutImage',
  component: BreakoutImage,
}

export const Default = props => <BreakoutImage {...props} />
Default.args = {
  title: 'Lorem Ipsum',
  description: 'Fusce nec urna ut tellus accumsan fermentum.',
  srcSet: {
    default: '//picsum.photos/500/800',
    500: '//picsum.photos/700/800',
    700: '//picsum.photos/1200/800',
    1200: '//picsum.photos/1500/900',
  },
  caption: 'Proin dictum lobortis luctus.',
}

export const WithParallax = props => {
  return (
    <div
      important="This wrapper div is not required for a BreakoutImage to work. So, don't copy it!"
      note="It's just adds some top margin in order to make the parallax effect is visible in StoryBook."
      style={{ marginBottom: 200 }}
    >
      <BreakoutImage {...props} />
    </div>
  )
}
WithParallax.args = {
  ...Default.args,
  parallax: true,
}
