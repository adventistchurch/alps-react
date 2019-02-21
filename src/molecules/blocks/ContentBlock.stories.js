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
    const srcSet = object('Image SrcSet', data.imageSrcSet[imageMode], imageTab)
    const alt = text('Image Alt', data.imageAlt, imageTab)

    const image = {
      alt,
      srcSet,
    }

    return (
      <ContentBlock
        category={category}
        description={description}
        image={showImage ? image : null}
        more={more}
        title={title}
        url={url}
      />
    )
  })
