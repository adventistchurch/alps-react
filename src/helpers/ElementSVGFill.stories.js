import React from 'react'

import { svgFillColors } from '../atoms/global/colors'
import { iconNames } from '../atoms/icons/Icon'
import IconWrap, { iconSizes } from '../atoms/icons/IconWrap'

import Element, { Paragraph } from './Element'

export default {
  title: 'ALPS/Helpers/Element/SVG',
}

const SVGTemplate = ({ pathFill, iconName, iconSize, themePathFill }) => {
  return (
    <Element pathFill={pathFill} themePathFill={themePathFill} padding>
      <IconWrap name={iconName} size={iconSize} />

      <Paragraph fontType="secondary">
        Element props <code>pathFill</code> and <code>themePathFill</code> do
        affect nested SVG paths fill color.
      </Paragraph>
      <Paragraph fontType="secondary">
        Try this by changing <strong>Theme SVG Path Fill</strong> or{' '}
        <strong>SVG Path Fill</strong> knobs.
      </Paragraph>
    </Element>
  )
}

export const SVGFill = SVGTemplate.bind({})
SVGFill.args = {}
SVGFill.argTypes = {
  pathFill: {
    control: { type: 'select', options: svgFillColors },
    defaultValue: 'black',
  },
  themePathFill: { control: { type: 'select', options: svgFillColors } },
  iconName: {
    control: { type: 'select', options: iconNames },
    defaultValue: 'logo',
  },
  iconSize: {
    control: { type: 'select', options: iconSizes },
    defaultValue: 'xl',
  },
}
