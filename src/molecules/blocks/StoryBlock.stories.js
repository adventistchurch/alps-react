import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  text,
  select,
  object,
  boolean,
  date,
} from '@storybook/addon-knobs'

import { iconNames } from '../../atoms/icons/Icon'
import StoryBlock from './StoryBlock'
import Video from '../../atoms/media/Video'

const iconOptions = [null, ...iconNames]

const defaults = {
  title: 'General Conference',
  description:
    'The General Conference coordinates the global ministry of the Seventh-day Adventist Church and is responsible for the spiritual and developmental plans of the church around the world.',
  datetime: new Date(),
  cta: 'Find out more',
  url: 'https://adventist.org',
  imageSrcSet: {
    Landscape: {
      default: '//placehold.it/200x150',
      500: '//placehold.it/400x300',
      750: '//placehold.it/600x450',
      1200: '//placehold.it/800x600',
    },
    Portrait: {
      default: '//placehold.it/150x200',
      500: '//placehold.it/300x400',
      750: '//placehold.it/450x600',
      1200: '//placehold.it/600x800',
    },
    Square: {
      default: '//placehold.it/100x100',
      500: '//placehold.it/200x200',
      750: '//placehold.it/300x300',
      1200: '//placehold.it/500x500',
    },
  },
  imageAlt: 'Placeholder image',
  videoSrc:
    'https://player.vimeo.com/video/137487821?color=ffffff&title=0&byline=0&portrait=0',
  isVideo: false,
  kickerText: '',
  headingTitle: '',
  headingIcon: '',
  asRow: false,
  asBreakout: false,
  bgImage: '//unsplash.it/g/1100/560?blur',
  innerClass: '',
}

storiesOf('molecules/blocks/StoryBlock', module)
  .addDecorator(withKnobs)

  .add('default', () => {
    const title = text('title', defaults.title)
    const description = text('description', defaults.description)
    const cta = text('cta', defaults.cta)
    const url = text('url', defaults.url)
    const imageSrcSet = object('imageSrcSet', defaults.imageSrcSet['Square'])
    const imageAlt = text('imageAlt', defaults.imageAlt)
    const textImageSrcSet = object(
      'textImageSrcSet',
      defaults.imageSrcSet['Landscape']
    )
    const textImageAlt = text('imageAlt', defaults.imageAlt)
    const bgImage = text('bgImage', defaults.bgImage)
    const isVideo = boolean('isVideo', defaults.isVideo)

    return (
      <StoryBlock
        title={title}
        description={description}
        url={url}
        cta={cta}
        imageSrcSet={imageSrcSet}
        imageAlt={imageAlt}
        textImageSrcSet={textImageSrcSet}
        textImageAlt={textImageAlt}
        bgImage={bgImage}
        isVideo={isVideo}
      />
    )
  })
