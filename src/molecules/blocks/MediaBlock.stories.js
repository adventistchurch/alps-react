import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object } from '@storybook/addon-knobs'

import MediaBlock from './MediaBlock'
import Video from '../../atoms/media/Video'

const defaults = {
  title: 'General Conference',
  description:
    'The General Conference coordinates the global ministry of the Seventh-day Adventist Church and is responsible for the spiritual and developmental plans of the church around the world.',
  cta: 'Find out more',
  url: 'https://adventist.org',
  imageSrcSet: {
    default: '//placehold.it/250x100',
    500: '//placehold.it/500x200',
    1000: '//placehold.it/1000x400',
    1500: '//placehold.it/1500x600',
  },
  imageAlt: 'Placeholder image',
  videoSrc:
    'https://player.vimeo.com/video/137487821?color=ffffff&title=0&byline=0&portrait=0',
}

storiesOf('molecules/blocks/MediaBlock', module)
  .addDecorator(withKnobs)

  .add('with title and description', () => {
    const title = text('title', defaults.title)
    const description = text('description', defaults.description)
    return <MediaBlock title={title} description={description} />
  })

  .add('with cta and url', () => {
    const title = text('title', defaults.title)
    const description = text('description', defaults.description)
    const cta = text('cta', defaults.cta)
    const url = text('url', defaults.url)
    return (
      <MediaBlock title={title} description={description} url={url} cta={cta} />
    )
  })

  .add('with image', () => {
    const title = text('title', defaults.title)
    const description = text('description', defaults.description)
    const imageSrcSet = object('imageSrcSet', defaults.imageSrcSet)
    const imageAlt = text('imageAlt', defaults.imageAlt)
    const url = text('url', defaults.url)
    return (
      <MediaBlock
        title={title}
        description={description}
        url={url}
        imageSrcSet={imageSrcSet}
        imageAlt={imageAlt}
      />
    )
  })

  .add('with video', () => {
    const title = text('title', defaults.title)
    const description = text('description', defaults.description)
    const videoSrc = text('videoSrc', defaults.videoSrc)
    return (
      <MediaBlock
        title={title}
        description={description}
        video={<Video src={videoSrc} />}
      />
    )
  })
