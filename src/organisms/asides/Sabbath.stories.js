import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text } from '@storybook/addon-knobs'

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
  const { showLogo, stickyLogo, showLogoOnScroll, tab } = getTabData(
    'Logo',
    settings
  )

  return {
    showLogo: boolean('Show logo', showLogo, tab),
    stickyLogo: boolean('Sticky logo', stickyLogo, tab),
    showLogoOnScroll: boolean('Show logo on Scroll', showLogoOnScroll, tab),
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
    const props = sabbathTab()

    return <Sabbath {...props} />
  })

  .addWithJSX('with Backround', () => {
    const props = sabbathTab({
      backgroundImage: '//picsum.photos/800/1000/?nature',
    })

    return <Sabbath {...props} />
  })

  .addWithJSX('with Show Logo On Scroll', () => {
    const props = sabbathTab({ stickyLogo: true })

    return <Sabbath {...props} />
  })
