import React from 'react'
import PropTypes from 'prop-types'

import { storiesOf } from '@storybook/react'
import { boolean, object } from '@storybook/addon-knobs'

import PrimaryNavigation from './PrimaryNavigation'

import data from './PrimaryNavigation.stories.json'

export function HeaderSimulator({ children }) {
  return (
    <div className="c-header">
      <div className="c-header__nav-primary">{children}</div>
    </div>
  )
}
HeaderSimulator.propTypes = {
  children: PropTypes.node,
}

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...PrimaryNavigation.defaultProps,
    ...data,
    ...settings,
  }
}

export function primaryNavTab(settings = {}) {
  const { hasPriorityNav, items, tab } = getTabData('Primary Nav', settings)

  return {
    hasPriorityNav: boolean('Has Priority Nav', hasPriorityNav, tab),
    items: object('Primary Nav items', items, tab),
  }
}

storiesOf('molecules/navigation/PrimaryNavigation', module)
  .addWithJSX('Default', () => {
    const { hasPriorityNav, items } = primaryNavTab()
    return (
      <HeaderSimulator>
        <PrimaryNavigation items={items} hasPriorityNav={hasPriorityNav} />
      </HeaderSimulator>
    )
  })

  .addWithJSX('With Priority Nav', () => {
    const { items, hasPriorityNav } = primaryNavTab({ hasPriorityNav: true })
    return (
      <HeaderSimulator>
        <PrimaryNavigation items={items} hasPriorityNav={hasPriorityNav} />
      </HeaderSimulator>
    )
  })
