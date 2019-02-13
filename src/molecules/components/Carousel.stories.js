import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'

import Carousel from './Carousel'

const defaults = {
  slides: [
    {
      heading: 'Lorem Ipsum',
      subtitle: 'Fusce nec urna ut tellus accumsan fermentum.',
      dek:
        'Morbi eleifend, mi et varius imperdiet, nunc magna ullamcorper nibh, vel varius felis dui ac arcu. Vestibulum semper commodo dolor vel congue. Curabitur eleifend ligula ut arcu finibus posuere.',
      cta: 'Mec cursus mi',
      url: 'https://www.adventist.org',
      imageSrcSet: {
        default: '//picsum.photos/500/375?image=765',
        500: '//picsum.photos/900/700?image=765',
        750: '//picsum.photos/700/600?image=723',
        1200: '//picsum.photos/500/375?image=321',
      },
      imageAlt: 'Placeholder image',
      isLazy: false,
    },
    {
      heading: 'Lorem Ipsum',
      subtitle: 'Fusce nec urna ut tellus accumsan fermentum.',
      dek:
        'Morbi eleifend, mi et varius imperdiet, nunc magna ullamcorper nibh, vel varius felis dui ac arcu. Vestibulum semper commodo dolor vel congue. Curabitur eleifend ligula ut arcu finibus posuere.',
      cta: 'Mec cursus mi',
      url: 'https://www.adventist.org',
      imageSrcSet: {
        default: '//picsum.photos/500/375?image=831',
        500: '//picsum.photos/900/700?image=831',
        750: '//picsum.photos/700/600?image=823',
        1200: '//picsum.photos/500/375?image=772',
      },
      imageAlt: 'Placeholder image',
      isLazy: false,
    },
  ],
}

storiesOf('molecules/components/Carousel', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const showArrows = boolean('Show Arrows', true)
    return <Carousel slides={defaults.slides} showArrows={showArrows} />
  })
