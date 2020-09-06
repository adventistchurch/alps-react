import React from 'react'

import GalleryBlock from './GalleryBlock'

export default {
  title: 'ALPS/Molecules/Blocks/GalleryBlock',
  component: GalleryBlock,
}

const GalleryBlockTemplate = props => <GalleryBlock {...props} />

export const Default = GalleryBlockTemplate.bind({})
Default.args = {
  title:
    'Adventist leaders call for international cooperation to end abuse of refugees in Libya',
  images: [
    {
      srcSet: {
        default: '//picsum.photos/500/282',
        500: '//picsum.photos/900/507',
        750: '//picsum.photos/700/395',
        1200: '//picsum.photos/500/282',
      },
      alt: 'Random image',
      caption: 'Nam pretium et mauris sit amet vehicula.',
    },
    {
      srcSet: {
        default: '//picsum.photos/id/464/500/282',
        500: '//picsum.photos/id/464/900/507',
        750: '//picsum.photos/id/464/700/395',
        1200: '//picsum.photos/id/464/500/282',
      },
      alt: 'First image',
      caption: 'Morbi at est tristique.',
    },
    {
      srcSet: {
        default: '//picsum.photos/id/534/500/700',
        500: '//picsum.photos/id/534/300/400',
        750: '//picsum.photos/id/534/450/600',
        1200: '//picsum.photos/id/534/600/800',
      },
      alt: 'Second image portrait',
      caption: 'Duis eu pharetra magna.',
      portrait: true,
    },
    {
      srcSet: {
        default: '//picsum.photos/id/201/500/282',
        500: '//picsum.photos/id/201/900/507',
        750: '//picsum.photos/id/201/700/395',
        1200: '//picsum.photos/id/201/500/282',
      },
      alt: 'Third image',
      caption: 'Curabitur vulputate mattis dignissim.',
    },
  ],
}

export const WithKicker = GalleryBlockTemplate.bind({})
WithKicker.args = {
  ...Default.args,
  kicker: 'Mauris sit amet!',
}
