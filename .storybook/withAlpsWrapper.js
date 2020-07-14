import React from 'react'

import Wrapper from '../src/Wrapper'
import { primaryColors, secondaryColors } from '../src/atoms/global/colors'

import { boolean, select } from '@storybook/addon-knobs'

export default function withAlpsWrapper({
  primaryColor = 'ming',
  secondaryColor = null,
  hasGrid = true,
} = {}) {
  return story => {
    const content = story()
    const tab = 'Theme' // Tab Name
    const wrapperProps = {
      hasGrid: boolean('Has Grid', hasGrid, tab),
      primaryColor: select('Primary color', primaryColors, primaryColor, tab),
      secondaryColor: select(
        'Secondary color',
        secondaryColors,
        secondaryColor,
        tab
      ),
    }

    return <Wrapper {...wrapperProps}>{content}</Wrapper>
  }
}
