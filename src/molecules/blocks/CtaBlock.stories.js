import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, boolean, object } from '@storybook/addon-knobs'

import CtaBlock from './CtaBlock'

import data from './CtaBlock.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...CtaBlock.defaultProps,
    ...data,
    ...settings,
  }
}

function textsTab(settings = {}) {
  const { description, title, tab } = getTabData('Texts', settings)

  return {
    title: text('Title', title, tab),
    description: text('Description', description, tab),
  }
}

function pictureTab(settings = { asBackgroundImage: false }) {
  const { asBackgroundImage, picture, tab } = getTabData('Picture', settings)

  return {
    picture: object('Picture', picture, tab),
    asBackgroundImage: boolean('As Background Image', asBackgroundImage, tab),
  }
}
function buttonsTab(settings = {}) {
  const { buttons, tab } = getTabData('Buttons', settings)

  return {
    buttons: object('Buttons', buttons, tab),
  }
}

storiesOf('molecules/blocks/CtaBlock', module)
  .addWithJSX('Default', () => {
    const { description, kicker, title } = textsTab()
    const { asBackgroundImage, picture } = pictureTab()
    const { buttons } = buttonsTab()

    return (
      <CtaBlock
        asBackgroundImage={asBackgroundImage}
        buttons={buttons}
        description={description}
        kicker={kicker}
        picture={picture}
        title={title}
      />
    )
  })
  .addWithJSX('With picture as Background', () => {
    const { description, kicker, title } = textsTab()
    const { asBackgroundImage, picture } = pictureTab({
      asBackgroundImage: true,
    })
    const { buttons } = buttonsTab()

    return (
      <CtaBlock
        asBackgroundImage={asBackgroundImage}
        buttons={buttons}
        description={description}
        kicker={kicker}
        picture={picture}
        title={title}
      />
    )
  })
