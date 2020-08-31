import React from 'react'

import IconWrap, { iconSizes } from './IconWrap'
import { iconNames } from './Icon'
import {
  svgFillColors,
  themeColors,
  themeBackgroundColors,
} from '../../atoms/global/colors'

export default {
  title: 'Atoms/Icons/IconWrap',
  component: IconWrap,
  args: {
    name: '',
  },
}

const IconWrapTemplate = props => <IconWrap {...props} />

export const Default = IconWrapTemplate.bind({})
Default.args = { name: 'logo' }
Default.argTypes = {
  name: { control: { type: 'select', options: iconNames } },
  fill: { control: { type: 'color' } },
  size: { control: { type: 'select', options: iconSizes } },
  color: { control: { type: 'select', options: svgFillColors } },
  themeColor: { control: { type: 'select', options: themeColors } },
  background: { control: { type: 'select', options: themeBackgroundColors } },
}
