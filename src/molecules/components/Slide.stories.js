import React from 'react'

import Slide from './Slide'

export default {
  title: 'ALPS/Molecules/Components/Slide',
  component: Slide,
}

const SlideTemplate = props => <Slide {...props} />

export const Default = SlideTemplate.bind({})
Default.args = {
  heading: 'Lorem Ipsum',
  subtitle: 'Fusce nec urna ut tellus accumsan fermentum.',
  dek:
    'Morbi eleifend, mi et varius imperdiet, nunc magna ullamcorper nibh, vel varius felis dui ac arcu. Vestibulum semper commodo dolor vel congue. Curabitur eleifend ligula ut arcu finibus posuere.',
  cta: 'Read more',
  url: 'https://www.adventist.org',
  image: {
    srcSet: {
      default: '//picsum.photos/id/123/500/450',
      500: '//picsum.photos/id/123/750/400',
      750: '//picsum.photos/id/123/1200/800',
      1200: '//picsum.photos/id/123/1500/900',
    },
    alt: 'Placeholder image',
  },
}
