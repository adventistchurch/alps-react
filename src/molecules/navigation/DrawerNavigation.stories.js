import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import DrawerNavigation from './DrawerNavigation'

import data from './DrawerNavigation.stories.json'
import dataPrimaryNav from './PrimaryNavigation.stories.json'
import dataSecondaryNav from './SecondaryNavigation.stories.json'

const propsTab = 'Props'

storiesOf('molecules/navigation/DrawerNavigation', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const aboutLeft = text('About Left', data.aboutLeft, propsTab)
    const aboutRigth = text('About Rigth', data.aboutRigth, propsTab)

    return (
      <DrawerNavigation
        aboutLeft={aboutLeft}
        aboutRight={aboutRigth}
        primaryNav={dataPrimaryNav}
        secondaryNav={dataSecondaryNav}
      />
    )
  })
