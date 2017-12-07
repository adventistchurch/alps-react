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
import MediaBlock from './MediaBlock'
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
  kickerText: '',
  headingTitle: '',
  headingIcon: '',
  asRow: false,
  asBreakout: false,
  roundImage: false,
  innerClass: '',
}

const imageModes = ['Landscape', 'Portrait', 'Square']

storiesOf('molecules/blocks/MediaBlock', module)
  .addDecorator(withKnobs)

  .add('default', () => {
    const title = text('title', defaults.title)
    const description = text('description', defaults.description)
    const showCta = boolean('show cta', false)
    const cta = text('cta', defaults.cta)
    const url = text('url', defaults.url)
    const datetime = date('datetime', defaults.datetime)
    const showHeading = boolean('show heading', false)
    const headingTitle = text('headingTitle', defaults.headingTitle)
    const headingIcon = select('headingIcon', iconOptions, defaults.headingIcon)
    const kickerText = text('kickerText', defaults.kickerText)
    const showImage = boolean('show image', false)
    const imageMode = select('imageMode', imageModes, imageModes[0])
    const imageSrcSet = object('imageSrcSet', defaults.imageSrcSet[imageMode])
    const imageAlt = text('imageAlt', defaults.imageAlt)
    const asRow = boolean('asRow', defaults.asRow)
    const asBreakout = boolean('asBreakout', defaults.asBreakout)
    const roundImage = boolean('roundImage', defaults.roundImage)

    return (
      <MediaBlock
        title={title}
        description={description}
        datetime={datetime}
        url={url}
        cta={showCta ? cta : null}
        headingTitle={showHeading ? headingTitle : null}
        headingIcon={headingIcon}
        kickerText={kickerText}
        imageSrcSet={showImage ? imageSrcSet : null}
        imageAlt={imageAlt}
        asBreakout={asBreakout}
        asRow={asRow}
        roundImage={roundImage}
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

  .add('with kicker', () => {
    const title = text('title', defaults.title)
    const description = text('description', defaults.description)
    const kickerText = text('kickerText', 'Lorem ipsum')
    return (
      <MediaBlock
        title={title}
        description={description}
        kickerText={kickerText}
      />
    )
  })

  .add('as row', () => {
    const title = text('title', defaults.title)
    const description = text('description', defaults.description)
    const cta = text('cta', defaults.cta)
    const url = text('url', defaults.url)
    const headingTitle = text('headingTitle', '')
    const headingIcon = select('headingIcon', iconOptions, '')
    const kickerText = text('kickerText', '')
    const imageMode = select('imageMode', imageModes, 'Square')
    const imageSrcSet = object('imageSrcSet', defaults.imageSrcSet[imageMode])
    const imageAlt = text('imageAlt', defaults.imageAlt)
    const asRow = boolean('asRow', true)
    const roundImage = boolean('roundImage', true)
    return (
      <MediaBlock
        title={title}
        url={url}
        cta={cta}
        kickerText={kickerText}
        headingTitle={headingTitle}
        headingIcon={headingIcon}
        imageSrcSet={imageSrcSet}
        imageAlt={imageAlt}
        description={description}
        asRow={asRow}
        roundImage={roundImage}
      />
    )
  })

  .add('as breakout', () => {
    const title = text('title', defaults.title)
    const description = text('description', defaults.description)
    const cta = text('cta', defaults.cta)
    const url = text('url', defaults.url)
    const headingTitle = text('headingTitle', 'Lorem Breakout')
    const headingIcon = select('headingIcon', iconOptions, 'list')
    const imageMode = select('imageMode', imageModes, imageModes[0])
    const imageSrcSet = object('imageSrcSet', defaults.imageSrcSet[imageMode])
    const imageAlt = text('imageAlt', defaults.imageAlt)
    const asBreakout = boolean('asBreakout', true)
    const roundImage = boolean('roundImage', defaults.roundImage)
    return (
      <MediaBlock
        title={title}
        url={url}
        cta={cta}
        headingTitle={headingTitle}
        headingIcon={headingIcon}
        imageSrcSet={imageSrcSet}
        imageAlt={imageAlt}
        description={description}
        asBreakout={asBreakout}
        roundImage={roundImage}
      />
    )
  })
