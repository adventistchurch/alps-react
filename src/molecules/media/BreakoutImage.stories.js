import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, text } from '@storybook/addon-knobs'

import BreakoutImage from './BreakoutImage'

import data from './BreakoutImage.stories.json'

const propsTab = 'Props'

storiesOf('molecules/media/BreakoutImage', module)
  

  .addWithJSX('Default', () => {
    const srcSet = object('Image SrcSet *', data.srcSet, propsTab)
    const caption = text('Caption', data.caption, propsTab)
    return <BreakoutImage srcSet={srcSet} caption={caption} />
  })

  .addWithJSX('With Parallax', () => {
    const srcSet = object('Image SrcSet *', data.srcSet, propsTab)
    const caption = text('Caption', data.caption, propsTab)
    const wrapperStyle = { marginTop: 100 }

    return (
      <div
        important="This wrapper div is not required for a BreakoutImage to work. So, don't copy it!"
        note="It's just adds some top margin in order to make the parallax effect is visible in StoryBook."
        style={wrapperStyle}
      >
        <BreakoutImage srcSet={srcSet} caption={caption} parallax />
      </div>
    )
  })
