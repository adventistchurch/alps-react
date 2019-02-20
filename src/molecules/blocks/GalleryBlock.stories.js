import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object } from '@storybook/addon-knobs'

import GalleryBlock from './GalleryBlock'

import data from './GalleryBlock.stories.json'

const propsTab = 'Props'
const imagesTab = 'Images'

storiesOf('molecules/blocks/GalleryBlock', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const kicker = text('Kicker', data.kicker, propsTab)
    const title = text('Title', data.title, propsTab)
    const images = object('Image SrcSet', data.images, imagesTab)

    return <GalleryBlock images={images} kicker={kicker} title={title} />
  })
