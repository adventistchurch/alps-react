import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs'

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
  const { showLanguages, showMenu, showSearch, tab } = getTabData(
    'Options',
    settings
  )

  return {
    showLanguages: boolean('Show Languages', showLanguages, tab),
    showMenu: boolean('Show Menu', showMenu, tab),
    showSearch: boolean('Show Search', showSearch, tab),
  }
}

function languagesTab(settings = {}) {
  const { languages, languageLabel, tab } = getTabData('Languages', settings)

  return {
    label: text('Language Label', languageLabel, tab),
    languages: object('Languages', languages, tab),
  }
}

export function secondaryNavTab(settings = {}) {
  const {
    showLanguages,
    showMenu,
    showSearch,
    withSubmenues,
    tab,
  } = getTabData('Secondary Nav', settings)

  return {
    ...optionsTab({ showLanguages, showMenu, showSearch, tab }),
    ...itemsTab({ withSubmenues, tab }),
  }
}

storiesOf('molecules/navigation/SecondaryNavigation', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const { showLanguages, showMenu, showSearch } = optionsTab()
    const languageProps = languagesTab()
    const { items } = itemsTab()

    return (
      <SecondaryNavigation
        items={items}
        showLanguages={showLanguages}
        languageProps={languageProps}
        showMenu={showMenu}
        showSearch={showSearch}
      />
    )
  })

  .addWithJSX('With submenues', () => {
    const { showLanguages, showMenu, showSearch } = optionsTab()
    const languageProps = languagesTab()
    const { items } = itemsTab({
      withSubmenues: true,
    })

    return (
      <SecondaryNavigation
        items={items}
        showLanguages={showLanguages}
        languageProps={languageProps}
        showMenu={showMenu}
        showSearch={showSearch}
      />
    )
  })

  .addWithJSX('Without menu and search toggles', () => {
    const { showLanguages, showMenu, showSearch } = optionsTab({
      showMenu: false,
      showSearch: false,
    })
    const languageProps = languagesTab()
    const { items } = itemsTab()

    return (
      <SecondaryNavigation
        items={items}
        showLanguages={showLanguages}
        languageProps={languageProps}
        showMenu={showMenu}
        showSearch={showSearch}
      />
    )
  })

  .addWithJSX('Without languages', () => {
    const { showLanguages, showMenu, showSearch } = optionsTab({
      showLanguages: false,
    })
    const { items } = itemsTab()

    return (
      <SecondaryNavigation
        items={items}
        showLanguages={showLanguages}
        showMenu={showMenu}
        showSearch={showSearch}
      />
    )
  })
