import React from 'react'

import Button, { iconPositions } from './Button'
import { iconNames } from '../icons/Icon'

import { iconSizes } from '../icons/IconWrap'

export default {
  title: 'Atoms/Buttons/Button',
  component: Button,
  args: {
    text: 'Learn more',
    href: '',
    url: '',
    as: 'button',
    className: '',
    disabled: false,
    outline: false,
    small: false,
    simple: false,
    lighter: false,
  },
  argTypes: {
    as: { control: { type: 'select', options: ['button', 'a'] } },
    icon: { control: { type: 'select', options: iconNames } },
    iconSize: { control: { type: 'select', options: iconSizes } },
    iconPosition: { control: { type: 'select', options: iconPositions } },
  },
}

const ButtonTemplate = props => {
  return <Button {...props} />
}

export const Default = ButtonTemplate.bind({})

export const Disabled = ButtonTemplate.bind({})
Disabled.args = { disabled: true }

export const Lighter = ButtonTemplate.bind({})
Lighter.args = { lighter: true }

export const Outline = ButtonTemplate.bind({})
Outline.args = { outline: true }

export const Simple = ButtonTemplate.bind({})
Simple.args = { simple: true }

export const Small = ButtonTemplate.bind({})
Small.args = { small: true }

export const Toggle = ButtonTemplate.bind({})
Toggle.args = { toggle: true }

const WithIcon = ButtonTemplate.bind({})
WithIcon.args = { icon: 'plus', iconSize: 'xs' }

export const WithIconLeft = WithIcon.bind({})
WithIconLeft.args = { ...WithIcon.args, iconPosition: 'left' }

export const WithIconRight = WithIcon.bind({})
WithIconRight.args = {
  ...WithIcon.args,
  iconPosition: 'right',
}
