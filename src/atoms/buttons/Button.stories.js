import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, text as textInput, select } from '@storybook/addon-knobs'

import Button, { iconPositions, asOptions } from './Button'
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
    as: select('As', asOptions, as, tab),
  }
}

export function iconTab(settings = {}) {
  const { icon, iconPosition, iconSize, tab } = getTabData('Icon', settings)

  const selectedIcon = select('Icon', ['', ...iconNames], icon, tab)

  return {
    icon: selectedIcon,
    iconSize: selectedIcon
      ? select('Size', iconSizes, iconSize, tab)
      : undefined,
    iconPosition: selectedIcon
      ? select('Position', iconPositions, iconPosition, tab)
      : undefined,
    iconFill: selectedIcon
      ? select('Fill', { white: 'white', '-': null }, iconPosition, tab)
      : undefined,
  }
}

export function settingsTab(settings = {}) {
  const {
    disabled,
    expand,
    lighter,
    outline,
    simple,
    small,
    toggle,
    tab,
  } = getTabData('Settings', settings)
  return {
    disabled: boolean('Disabled', disabled, tab),
    expand: boolean('Expand', expand, tab),
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
    const props = allTabs({ disabled: true })
    return <Button disabled {...props} />
  })

  .addWithJSX('Lighter', () => {
    const props = allTabs({ lighter: true })
    return <Button lighter {...props} />
  })

  .addWithJSX('Outline', () => {
    const props = allTabs({ outline: true })
    return <Button outline {...props} />
  })

  .addWithJSX('Simple', () => {
    const props = allTabs({ simple: true })
    return <Button simple {...props} />
  })

  .addWithJSX('Small', () => {
    const props = allTabs({ small: true })
    return <Button small {...props} />
  })

  .addWithJSX('With icon left', () => {
    const props = allTabs({ icon: 'plus' })
    return <Button icon="plus" {...props} />
  })

  .addWithJSX('With icon right', () => {
    const props = allTabs({ icon: 'plus', iconPosition: 'right' })
    return <Button icon="plus" {...props} />
  })

  .addWithJSX('Toggle', () => {
    return <Button icon="plus" outline toggle small />
  })
