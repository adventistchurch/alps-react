import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, select, withKnobs } from '@storybook/addon-knobs'

import Header from './Header'
import logos from '../../atoms/images/logos'

import data from './Header.stories.json'
import dataPrimaryNav from '../../molecules/navigation/PrimaryNavigation.stories.json'
import dataSecondaryNav from '../../molecules/navigation/SecondaryNavigation.stories.json'

const drawerTab = 'Drawer'
const logoTab = 'Logo'

storiesOf('organisms/global/Header', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    // Drawer:
    const drawer = object('Drawer', data.drawer, drawerTab)

    // Logo:
    const logoName = select(
      'Logo Name',
      Object.keys(logos),
      data.logo.name,
      logoTab
    )
    const logoCanBeDark = boolean('Logo can be dark', false, logoTab)
    const logoUseFillTheme = boolean('Logo Use Fill Theme', true, logoTab)
    const logo = {
      name: logoName,
      canBeDark: logoCanBeDark,
      useFillTheme: logoUseFillTheme,
    }

    return (
      <Header
        {...drawer}
        logo={logo}
        primaryNav={dataPrimaryNav}
        secondaryNav={dataSecondaryNav}
      />
    )
  })
