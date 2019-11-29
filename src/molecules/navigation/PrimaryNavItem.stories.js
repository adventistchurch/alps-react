import React from 'react'
import PropTypes from 'prop-types'

import { storiesOf } from '@storybook/react'
import { boolean, object, text as textInput } from '@storybook/addon-knobs'

import PrimaryNavItem from './PrimaryNavItem'
import { PrimaryNavBase } from './PrimaryNavigation'

import data from './PrimaryNavItem.stories.json'

export function HeaderSimulator({ children }) {
  return (
    <div className="c-header">
      <div className="c-header__nav-primary">
        <PrimaryNavBase>{children}</PrimaryNavBase>
      </div>
    </div>
  )
}
HeaderSimulator.propTypes = {
  children: PropTypes.node,
}

function getTabData(name, settings = {}) {
  const { text, url } = data
  return {
    tab: name,
    ...PrimaryNavItem.defaultProps,
    text,
    url,
    ...settings,
  }
}

function generalTab(settings = {}) {
  const { active, priority, linkClass, text, url, tab } = getTabData(
    'General',
    settings
  )

  return {
    text: textInput('Text *', text, tab),
    url: textInput('URL *', url, tab),
    priority: boolean('Is Priority?', priority, tab),
    active: boolean('Is Active?', active, tab),
    linkClass: textInput('Link class (i.e. `is-bold`)', linkClass, tab),
  }
}

function subnavTab(settings = {}) {
  const { subnav, tab } = getTabData('Subnav', settings)

  return {
    subnav: object('Subnav', subnav, tab),
  }
}

function primaryNavTabs(settings = {}) {
  return {
    ...generalTab(settings),
    ...subnavTab(settings),
  }
}

storiesOf('molecules/navigation/PrimaryNavItem', module)
  .addWithJSX('Default', () => {
    const props = primaryNavTabs()

    return (
      <HeaderSimulator>
        <PrimaryNavItem {...props} />
      </HeaderSimulator>
    )
  })

  .addWithJSX('With Submenu', () => {
    const props = primaryNavTabs({ subnav: data.subnav })

    return (
      <HeaderSimulator>
        <PrimaryNavItem {...props} />
      </HeaderSimulator>
    )
  })

  .addWithJSX('With Priority', () => {
    const props = primaryNavTabs({ priority: true })

    return (
      <HeaderSimulator>
        <PrimaryNavItem {...props} />
      </HeaderSimulator>
    )
  })
