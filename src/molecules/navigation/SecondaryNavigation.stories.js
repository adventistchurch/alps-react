import React from 'react'
import PropTypes from 'prop-types'
import { storiesOf } from '@storybook/react'
import { boolean, object } from '@storybook/addon-knobs'

import SecondaryNavigation from './SecondaryNavigation'
import data from './SecondaryNavigation.stories.json'

export function HeaderSimulator({ children, enabled }) {
  return enabled ? (
    <div className="c-header">
      <div className="c-header__nav-secondary">{children}</div>
    </div>
  ) : (
    children
  )
}
HeaderSimulator.propTypes = {
  children: PropTypes.node,
  enabled: PropTypes.bool,
}

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
  const { showMenu, showSearch, simulateHeader, tab } = getTabData(
    'Options',
    settings
  )

  return {
    showMenu: boolean('Show Menu', showMenu, tab),
    showSearch: boolean('Show Search', showSearch, tab),
    simulateHeader: boolean('Simulate within header', simulateHeader, tab),
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
    const { showMenu, showSearch, simulateHeader } = optionsTab()
    const { items } = itemsTab()

    return (
      <HeaderSimulator enabled={simulateHeader}>
        <SecondaryNavigation
          items={items}
          showMenu={showMenu}
          showSearch={showSearch}
        />
      </HeaderSimulator>
    )
  })

  .addWithJSX('With submenues', () => {
    const { showMenu, showSearch, simulateHeader } = optionsTab()
    const { items } = itemsTab({
      withSubmenues: true,
    })

    return (
      <HeaderSimulator enabled={simulateHeader}>
        <SecondaryNavigation
          items={items}
          showMenu={showMenu}
          showSearch={showSearch}
        />
      </HeaderSimulator>
    )
  })

  .addWithJSX('Without menu and search toggles', () => {
    const { showMenu, showSearch, simulateHeader } = optionsTab({
      showMenu: false,
      showSearch: false,
    })
    const { items } = itemsTab()

    return (
      <HeaderSimulator enabled={simulateHeader}>
        <SecondaryNavigation
          items={items}
          showMenu={showMenu}
          showSearch={showSearch}
        />
      </HeaderSimulator>
    )
  })
