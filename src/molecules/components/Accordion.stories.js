import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, object, date } from '@storybook/addon-knobs'

import Accordion from './Accordion'

const defaults = {
  title: 'Ad nemo natus dignissimos',
  description:
    'Ex velit corporis ipsam voluptate quos non molestias laudantium repellendus tenetur consequuntur et numquam consequatur alias dicta quis, atque cupiditate mollitia explicabo!',
  datetime: new Date(),
  cta: 'Find out more',
  url: 'https://adventist.org',
  imageSrcSet: {
    default: '//placehold.it/200x150',
    500: '//placehold.it/400x300',
    750: '//placehold.it/600x450',
    1200: '//placehold.it/800x600',
  },
  imageAlt: 'Placeholder image',
}

storiesOf('molecules/components/Accordion', module)
  .addDecorator(withKnobs)

  .add('default', () => {
    const item = {
      title: text('title', defaults.title),
      datetime: date('datetime', defaults.datetime),
      description: text('description', defaults.description),
      cta: text('cta', defaults.cta),
      url: text('url', defaults.url),
      imageSrcSet: object('imageSrcSet', defaults.imageSrcSet['Square']),
      imageAlt: text('imageAlt', defaults.imageAlt),
    }

    return <Accordion items={[item, item, item, item, item]} />
  })
