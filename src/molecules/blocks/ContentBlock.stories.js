import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  
  text,
  boolean,
  object,
  select,
} from '@storybook/addon-knobs'

import ContentBlock from './ContentBlock'

import data from './ContentBlock.stories.json'

const imageModes = ['Landscape', 'Portrait', 'Square']

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...ContentBlock.defaultProps,
    ...data,
    ...settings,
  }
}

function textsTab(settings = {}) {
  const { category, description, more, title, tab } = getTabData(
    'Texts',
    settings
  )

  return {
    title: text('Title *', title, tab),
    description: text('Description', description, tab),
    category: text('Category', category, tab),
    more: text('Extra text (more)', more, tab),
  }
}
function imageTab(settings = {}) {
  const { image, showImage, tab } = getTabData('Image', settings)

  const mode = select('Image Mode', imageModes, 'Landscape', tab)

  return {
    image: boolean('Show Image', showImage, tab)
      ? {
          alt: text('Image Alt', image.alt, tab),
          srcSet: object('Image SrcSet', image.srcSet[mode], tab),
        }
      : null,
  }
}

function ctaTab(settings = {}) {
  const { cta, url, tab } = getTabData('CTA', settings)

  const showCta = boolean('Show Call to Action', true, tab)

  return showCta
    ? {
        cta: text('Call to Action Text', cta, tab),
        url: text('Call to Action URL', url, tab),
      }
    : {}
}

export function contentBlockTab(settings = {}) {
  const props = getTabData('Results', settings)

  return {
    ...textsTab(props),
    ...imageTab(props),
    ...ctaTab(props),
  }
}

storiesOf('molecules/blocks/ContentBlock', module)
  

  .addWithJSX('Default', () => {
    const { category, description, title } = textsTab()
    const { image } = imageTab()
    const { cta, url } = ctaTab()

    return (
      <ContentBlock
        title={title}
        description={description}
        category={category}
        image={image}
        cta={cta}
        url={url}
      />
    )
  })

  .addWithJSX('Show more', () => {
    const { category, description, more, title } = textsTab()
    const { cta, url } = ctaTab()
    const { image } = imageTab()

    return (
      <ContentBlock
        category={category}
        cta={cta}
        description={description}
        image={image}
        more={more}
        title={title}
        url={url}
      />
    )
  })

  .addWithJSX('With image', () => {
    const { category, description, title } = textsTab()
    const { cta, url } = ctaTab()
    const { image } = imageTab({ showImage: true })

    return (
      <ContentBlock
        category={category}
        cta={cta}
        description={description}
        image={image}
        title={title}
        url={url}
      />
    )
  })
