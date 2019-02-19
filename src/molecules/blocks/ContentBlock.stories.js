import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs,
  text,
  boolean,
  object,
  select,
} from '@storybook/addon-knobs'

import ContentBlock from './ContentBlock'

import data from './ContentBlock.stories.json'

const propsTab = 'Props'
const ctaTab = 'CTA'
const imageTab = 'Image'

const imageModes = ['Landscape', 'Portrait', 'Square']

storiesOf('molecules/blocks/ContentBlock', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const title = text('Title *', data.title, propsTab)
    const description = text('Description', data.description, propsTab)
    const category = text('Category', data.category, propsTab)
    const showCta = boolean('Show Call to Action', true, ctaTab)
    const cta = text('Call to Action Text', data.cta, ctaTab)
    const url = text('Call to Action URL', data.url, ctaTab)
    return (
      <ContentBlock
        title={title}
        description={description}
        category={category}
        cta={showCta ? cta : null}
        url={showCta ? url : null}
      />
    )
  })

  .addWithJSX('Show more', () => {
    const title = text('Title *', data.title, propsTab)
    const description = text('Description', data.description, propsTab)
    const more = text('Extra text (more)', data.more, propsTab)
    const url = text('URL', data.url, propsTab)
    const category = text('Category', data.category, propsTab)
    const showImage = boolean('Show Image', true, imageTab)
    const imageMode = select('Image Mode', imageModes, 'Landscape', imageTab)
    const imageSrcSet = object(
      'Image SrcSet',
      data.imageSrcSet[imageMode],
      imageTab
    )
    const imageAlt = text('Image Alt', data.imageAlt, imageTab)
    return (
      <ContentBlock
        title={title}
        category={category}
        description={description}
        more={more}
        imageSrcSet={showImage ? imageSrcSet : null}
        imageAlt={showImage ? imageAlt : null}
        url={url}
      />
    )
  })
