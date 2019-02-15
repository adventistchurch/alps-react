import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, withKnobs } from '@storybook/addon-knobs'

import Aside from './Aside'

const propsTab = 'Props'
const defaults = {
  primaryBlocks: {
    heading: 'News',
    linkText: 'See All',
    url: '/news/all',
    blocks: [
      {
        title: 'Nulla finibus ligula ut nisl facilisis',
        description:
          'Curabitur non est vulputate, euismod nibh non, sollicitudin nisi. Morbi ullamcorper purus et massa mattis fermentum.',
        category: 'Culture',
        datetime: 1550093519415,
        imageSrcSet: {
          '500': '//picsum.photos/900/507?random',
          '750': '//picsum.photos/700/395?random',
          '1200': '//picsum.photos/500/282?random',
          default: '//picsum.photos/500/282?random',
        },
        imageAlt: 'Placeholder image',
        stacked: true,
        border: 'left',
      },
      {
        title: 'Nulla finibus ligula ut nisl facilisis',
        description:
          'Curabitur non est vulputate, euismod nibh non, sollicitudin nisi. Morbi ullamcorper purus et massa mattis fermentum.',
        category: 'Culture',
        datetime: 1550093519415,
        imageSrcSet: {
          '500': '//picsum.photos/900/507?random',
          '750': '//picsum.photos/700/395?random',
          '1200': '//picsum.photos/500/282?random',
          default: '//picsum.photos/500/282?random',
        },
        imageAlt: 'Placeholder image',
        stacked: true,
        border: 'left',
      },
    ],
  },
  secondaryBlocks: {
    heading: 'More News',
    linkText: 'See All',
    url: '/news/all',
    blocks: [
      {
        title: 'Aenean quis velit vel nibh commodo elementum',
        category: 'Culture',
      },
      {
        title: 'Aenean quis velit vel nibh commodo elementum',
        category: 'Culture',
      },
      {
        title: 'Aenean quis velit vel nibh commodo elementum',
        category: 'Culture',
      },
      {
        title: 'Aenean quis velit vel nibh commodo elementum',
        category: 'Culture',
      },
    ],
  },
}

storiesOf('organisms/asides/Aside', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const primaryBlocks = object(
      'Primary Blocks',
      defaults.primaryBlocks,
      propsTab
    )
    const secondaryBlocks = object(
      'Secondary Blocks',
      defaults.primaryBlocks,
      propsTab
    )
    return (
      <Aside primaryBlocks={primaryBlocks} secondaryBlocks={secondaryBlocks} />
    )
  })
