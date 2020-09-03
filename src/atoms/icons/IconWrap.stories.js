import React from 'react'

import IconWrap, { iconSizes } from './IconWrap'
import { iconNames } from './Icon'
import {
  svgFillColors,
  themeColors,
  themeBackgroundColors,
} from '../../atoms/global/colors'

export default {
  title: 'ALPS/Atoms/Icons/IconWrap',
  component: IconWrap,
  argTypes: {
    name: { control: { type: 'select', options: iconNames } },
    fill: { control: { type: 'color' } },
    size: { control: { type: 'select', options: iconSizes } },
    color: { control: { type: 'select', options: svgFillColors } },
    themeColor: { control: { type: 'select', options: themeColors } },
    background: { control: { type: 'select', options: themeBackgroundColors } },
  },
}

const IconWrapTemplate = props => <IconWrap {...props} />

export const Default = IconWrapTemplate.bind({})
Default.args = { name: 'logo' }
