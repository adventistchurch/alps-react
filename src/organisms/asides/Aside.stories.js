import React from 'react'
import { storiesOf } from '@storybook/react'
import { object } from '@storybook/addon-knobs'

import Aside from './Aside'
import data from './Aside.stories.json'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Aside.defaultProps,
    ...data,
    ...settings,
  }
}

// TODO: Add search and content knobs
export function asideTab(settings = {}) {
  const { primary, secondary, hidePrimary, hideSecondary, tab } = getTabData(
    'Aside',
    settings
  )

  return {
    primary: hidePrimary ? null : object('Primary Blocks *', primary, tab),
    secondary: hideSecondary
      ? null
      : object('Secondary Blocks', secondary, tab),
  }
}

storiesOf('organisms/asides/Aside', module).addWithJSX('Default', () => {
  const props = asideTab()

  return <Aside {...props} />
})
