import React from 'react'
import { storiesOf } from '@storybook/react'
// import { action } from '@storybook/addon-actions'
import { boolean, text as textInput, select } from '@storybook/addon-knobs'

import Button, { iconPositions, iconAsElements } from './Button'
import { iconNames } from '../icons/Icon'

import data from './Button.stories.json'
import { iconSizes } from '../icons/IconWrap'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Button.defaultProps,
    ...data,
    ...settings,
  }
}

export function generalTab(settings = {}) {
  const { as, text, url, tab } = getTabData('General', settings)
  return {
    text: textInput('Text *', text, tab),
    url: textInput('URL', url, tab),
    as: select('As', iconAsElements, as, tab),
  }
}

export function iconTab(settings = {}) {
  const { icon, iconPosition, iconSize, tab } = getTabData('Icon', settings)
  return {
    icon: select('Icon', iconNames, icon, tab),
    iconSize: select('Size', iconSizes, iconSize, tab),
    iconPosition: select('Position', iconPositions, iconPosition, tab),
    iconFill: select('Fill', { white: 'white', '-': null }, iconPosition, tab),
  }
}

export function settingsTab(settings = {}) {
  const { disabled, lighter, outline, simple, small, toggle, tab } = getTabData(
    'Settings',
    settings
  )
  return {
    disabled: boolean('Disabled', disabled, tab),
    lighter: boolean('Lighter', lighter, tab),
    outline: boolean('Outline', outline, tab),
    simple: boolean('Simple', simple, tab),
    small: boolean('Small', small, tab),
    toggle: boolean('Toggle', toggle, tab),
  }
}

function allTabs(settings = {}) {
  const generalProps = generalTab(settings)
  const iconProps = iconTab(settings)
  const settingsProps = settingsTab(settings)

  return { ...generalProps, ...iconProps, ...settingsProps }
}

storiesOf('atoms/buttons/Button', module)
  .addWithJSX('Default', () => {
    const props = allTabs()
    return <Button {...props} />
  })

  .addWithJSX('Disabled', () => {
    const props = allTabs()
    return <Button disabled {...props} />
  })

  .addWithJSX('Lighter', () => {
    const props = allTabs()
    return <Button lighter {...props} />
  })

  .addWithJSX('Outline', () => {
    const props = allTabs()
    return <Button outline {...props} />
  })

  .addWithJSX('Simple', () => {
    const props = allTabs()
    return <Button simple {...props} />
  })

  .addWithJSX('Small', () => {
    const props = allTabs()
    return <Button small {...props} />
  })

  .addWithJSX('With Icon', () => {
    const props = allTabs()
    return <Button icon="plus" {...props} />
  })

  .addWithJSX('Toggle', () => {
    return <Button icon="plus" outline toggle small />
  })
