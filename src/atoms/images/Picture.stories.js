import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, select, text } from '@storybook/addon-knobs'

import Picture from './Picture'
import data from './Picture.stories.json'

const imageModes = ['Landscape', 'Portrait', 'Square']
import range from '../../helpers/range'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Picture.defaultProps,
    ...data,
    ...settings,
  }
}

export function pictureTab(settings = {}) {
  const { alt, caption, srcSet, lazy, tab } = getTabData('Picture', settings)

  const imageMode = srcSet
    ? null
    : select(' Mode', imageModes, 'Landscape', tab)
  const src = srcSet || data[imageMode]

  return {
    image: {
      srcSet: object('Image SrcSet *', src, tab),
      alt: text('Image Alt', alt, tab),
      caption: text('Image Caption', caption, tab),
    },
    lazy: boolean('Lazy load', lazy, tab),
  }
}

storiesOf('atoms/images/Picture', module)
  .addWithJSX('Default', () => {
    const { image, lazy } = pictureTab()
    return <Picture image={image} lazy={lazy} />
  })
  .addWithJSX('Lazy', () => {
    const { image } = pictureTab()
    return range(10, 50).map((x, i) => (
      <div key={`lazy-image-${i}`} style={{ width: 400, height: 300 }}>
        <Picture
          image={{
            ...image,
            srcSet: {
              default: `//picsum.photos/id/${x}1/200/150`,
              placeholder: `//picsum.photos/id/${x}1/20/15`,
              '500': `//picsum.photos/id/${x}1/400/300`,
              '750': `//picsum.photos/id/${x}1/600/450`,
              '1200': `//picsum.photos/id/${x}1/800/600`,
            },
          }}
          lazy
        />
      </div>
    ))
  })
