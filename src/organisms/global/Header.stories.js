import React from 'react'
import { storiesOf } from '@storybook/react'
import { object, withKnobs } from '@storybook/addon-knobs'

import Header from './Header'

import data from './Header.stories.json'
import dataPrimaryNav from '../../molecules/navigation/PrimaryNavigation.stories.json'
import dataSecondaryNav from '../../molecules/navigation/SecondaryNavigation.stories.json'

const propsTab = 'Props'

storiesOf('organisms/global/Header', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const drawer = object('Drawer', data.drawer, propsTab)

    return (
      <Header
        {...data}
        {...drawer}
        primaryNav={dataPrimaryNav}
        secondaryNav={dataSecondaryNav}
      />
    )
  })
