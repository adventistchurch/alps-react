import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object } from '@storybook/addon-knobs'

import GalleryBlock from './GalleryBlock'

const defaults = {
  kicker: 'The General Conference.',
  title: 'Coordinates the global ministry of the Seventh-day Adventist Church.',
  description:
    'Is responsible for the spiritual and developmental plans of the church around the world.',
  imageSrcSet: [
    {
      default: '//picsum.photos/500/282?image=1067',
      500: '//picsum.photos/900/507',
      750: '//picsum.photos/700/395',
      1200: '//picsum.photos/500/282',
      imageAlt: 'Random image',
      imageCaption: 'Nam pretium et mauris sit amet vehicula.',
    },
    {
      default: '//picsum.photos/500/282?image=464',
      500: '//picsum.photos/900/507',
      750: '//picsum.photos/700/395',
      1200: '//picsum.photos/500/282',
      imageAlt: 'First image',
      imageCaption: 'Morbi at est tristique.',
    },
    {
      default: '//picsum.photos/500/700?image=534',
      500: '//picsum.photos/300/400',
      750: '//picsum.photos/450/600',
      1200: '//picsum.photos/600/800',
      imageAlt: 'Second image portrait',
      imageCaption: 'Duis eu pharetra magna.',
      isPortrait: true,
    },
    {
      default: '//picsum.photos/500/282?image=201',
      500: '//picsum.photos/900/507',
      750: '//picsum.photos/700/395',
      1200: '//picsum.photos/500/282',
      imageAlt: 'Third image',
      imageCaption: 'Curabitur vulputate mattis dignissim.',
    },
  ],
}

storiesOf('molecules/blocks/GalleryBlock', module)
  .addDecorator(withKnobs)

  .add('Default', () => {
    const kicker = text('Kicker', defaults.kicker)
    const title = text('Title', defaults.title)
    const imageSrcSet = object('Image SrcSet', defaults.imageSrcSet)
    return (
      <GalleryBlock kicker={kicker} title={title} imageSrcSet={imageSrcSet} />
    )
  })
