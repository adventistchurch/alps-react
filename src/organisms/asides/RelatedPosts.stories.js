import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, withKnobs } from '@storybook/addon-knobs'

import RelatedPosts from './RelatedPosts'

const propsTab = 'Props'
const defaults = {
  blocks: {
    heading: 'Related Stories',
    blocks: [
      {
        title:
          'Mauris at ante laoreet, gravida odio gravida, fermentum lectus ',
        category: 'Culture',
        imageSrcSet: {
          '500': '//picsum.photos/900/507?random',
          '750': '//picsum.photos/700/395?random',
          '1200': '//picsum.photos/500/282?random',
          default: '//picsum.photos/500/282?random',
        },
        imageAlt: 'Placeholder image',
        reversed: true,
        border: 'left',
      },
      {
        title: 'Proin sed nisl ac velit aliquam euismod non tincidunt lectus ',
        category: 'Culture',
        imageSrcSet: {
          '500': '//picsum.photos/900/507?random',
          '750': '//picsum.photos/700/395?random',
          '1200': '//picsum.photos/500/282?random',
          default: '//picsum.photos/500/282?random',
        },
        imageAlt: 'Placeholder image',
        reversed: true,
        border: 'left',
      },
    ],
  },
}

storiesOf('organisms/asides/RelatedPosts', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const blocks = object('Blocks', defaults.blocks, propsTab)
    return <RelatedPosts blocks={blocks} />
  })
