import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object } from '@storybook/addon-knobs'

import SecondaryNavigation from './SecondaryNavigation'

import data from './SecondaryNavigation.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...SecondaryNavigation.defaultProps,
    ...data,
    ...settings,
  }
}

function itemsTab({ withSubmenues, ...settings } = {}) {
  const { items, tab } = getTabData('Item', {
    items: withSubmenues ? data.itemsWithSubmenu : data.items,
    ...settings,
  })

  return {
    items: object('Secondary Nav items', items, tab),
  }
}

function optionsTab(settings = {}) {
  const { showMenu, showSearch, tab } = getTabData('Options', settings)

  return {
    showMenu: boolean('Show Menu', showMenu, tab),
    showSearch: boolean('Show Search', showSearch, tab),
  }
}

export function secondaryNavTab(settings = {}) {
  const { showMenu, showSearch, withSubmenues, tab } = getTabData(
    'Secondary Nav',
    settings
  )

  return {
    ...optionsTab({ showMenu, showSearch, tab }),
    ...itemsTab({ withSubmenues, tab }),
  }
}

storiesOf('molecules/navigation/SecondaryNavigation', module)
  .addWithJSX('Default', () => {
    const { showMenu, showSearch } = optionsTab()
    const { items } = itemsTab()

    return (
      <SecondaryNavigation
        items={items}
        showMenu={showMenu}
        showSearch={showSearch}
      />
    )
  })

  .addWithJSX('With submenues', () => {
    const { showMenu, showSearch } = optionsTab()
    const { items } = itemsTab({
      withSubmenues: true,
    })

    return (
      <SecondaryNavigation
        items={items}
        showMenu={showMenu}
        showSearch={showSearch}
      />
    )
  })

  .addWithJSX('Without menu and search toggles', () => {
    const { showMenu, showSearch } = optionsTab({
      showMenu: false,
      showSearch: false,
    })
    const { items } = itemsTab()

    return (
      <SecondaryNavigation
        items={items}
        showMenu={showMenu}
        showSearch={showSearch}
      />
    )
  })
