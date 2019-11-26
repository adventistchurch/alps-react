import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text} from '@storybook/addon-knobs'

import Sabbath from './Sabbath'
import data from './Sabbath.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Sabbath.defaultProps,
    ...data,
    ...settings,
  }
}

function logoTab(settings = {}) {
  const { showLogo, showLogoOnScroll, tab } = getTabData('Logo', settings)

  return {
    showLogo: boolean('Show logo', showLogo, tab),
    showLogoOnScroll: boolean('Show logo on scoll', showLogoOnScroll, tab),
  }
}

function backgroundTab(settings = {}) {
  const { backgroundImage, tab } = getTabData('Background', settings)

  return {
    backgroundImage: text('Background image', backgroundImage, tab),
  }
}

export function sabbathTab(settings = {}) {
  const tabData = getTabData('Sabbath Column', settings)

  return {
    ...logoTab(tabData),
    ...backgroundTab(tabData),
  }
}

storiesOf('organisms/asides/Sabbath', module)
  

  .addWithJSX('Default', () => {
    const { showLogo, showLogoOnScroll } = logoTab()

    return <Sabbath showLogo={showLogo} showLogoOnScroll={showLogoOnScroll} />
  })

  .addWithJSX('with Backround', () => {
    const { backgroundImage } = backgroundTab()
    const { showLogo, showLogoOnScroll } = logoTab()

    return (
      <Sabbath
        backgroundImage={backgroundImage}
        showLogo={showLogo}
        showLogoOnScroll={showLogoOnScroll}
      />
    )
  })

  .addWithJSX('with Show Logo On Scroll', () => {
    const { showLogo, showLogoOnScroll } = logoTab({ showLogoOnScroll: true })

    return <Sabbath showLogo={showLogo} showLogoOnScroll={showLogoOnScroll} />
  })
