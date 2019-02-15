import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, object, withKnobs } from '@storybook/addon-knobs'

import SecondaryNavigation from './SecondaryNavigation'

import data from './SecondaryNavigation.stories.json'

const propsTab = 'Props'

storiesOf('molecules/navigation/SecondaryNavigation', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    const showLanguages = boolean('Show Languages', true, propsTab)
    const showMenu = boolean('Show Menu', true, propsTab)
    const showSearch = boolean('Show Search', true, propsTab)
    const items = object('Items', data.items, propsTab)

    const props = {
      items,
      showLanguages,
      showMenu,
      showSearch,
    }
    return <SecondaryNavigation {...props} />
  })

  .addWithJSX('With submenues', () => {
    const items = object('Items', data.itemsWithSubmenu, propsTab)
    return (
      <SecondaryNavigation
        items={items}
        showLanguages={false}
        showMenu={false}
        showSearch={false}
      />
    )
  })
