import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text, withKnobs } from '@storybook/addon-knobs'

import Sabbath from './Sabbath'
import data from './Sabbath.stories.json'

const propsTab = 'Props'

storiesOf('organisms/asides/Sabbath', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const showLogo = boolean('Show logo', data.showLogo, propsTab)

    return <Sabbath showLogo={showLogo} />
  })

  .addWithJSX('with Backround', () => {
    const backgroundImage = text(
      'Background image',
      data.backgroundImage,
      propsTab
    )
    const showLogo = boolean('Show logo', data.showLogo, propsTab)
    const showLogoOnScroll = boolean(
      'Show logo on scoll',
      data.showLogoOnScroll,
      propsTab
    )

    return (
      <Sabbath
        backgroundImage={backgroundImage}
        showLogo={showLogo}
        showLogoOnScroll={showLogoOnScroll}
      />
    )
  })

  .addWithJSX('with Logo on Scroll', () => {
    const showLogo = boolean('Show logo', data.showLogo, propsTab)
    const showLogoOnScroll = boolean(
      'Show logo on scoll',
      data.showLogoOnScroll,
      propsTab
    )

    return <Sabbath showLogo={showLogo} showLogoOnScroll={showLogoOnScroll} />
  })
