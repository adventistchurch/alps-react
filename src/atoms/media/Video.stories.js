import React from 'react'
import { storiesOf } from '@storybook/react'
import { number, text } from '@storybook/addon-knobs'

import Video from './Video'

import data from './Video.stories.json'

const propsTab = 'Props'

storiesOf('atoms/media/Video', module)
  

  .addWithJSX('Default', () => {
    const src = text('Source *', data.src, propsTab)
    const width = number('Width', data.width, {}, propsTab)
    const height = number('Height', data.height, {}, propsTab)
    return <Video src={src} width={width} height={height} />
  })
