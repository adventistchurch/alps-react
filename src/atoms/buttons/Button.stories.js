import React from 'react'

import Button, { iconPositions } from './Button'
import { iconSizes, iconNames } from '../icons/IconWrap'

export default {
  title: 'ALPS/Atoms/Buttons/Button',
  component: Button,
  args: {
    text: 'Learn more',
    as: 'button',
    disabled: false,
    outline: false,
    small: false,
    simple: false,
    lighter: false,
    toggle: false,
    expand: false,
  },
  argTypes: {
    as: { control: { type: 'select', options: ['button', 'a'] } },
    icon: { control: { type: 'select', options: iconNames } },
    iconSize: { control: { type: 'inline-radio', options: iconSizes } },
    iconPosition: {
      control: { type: 'inline-radio', options: iconPositions },
    },
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
