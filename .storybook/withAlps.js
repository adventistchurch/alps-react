import React from 'react'

import AlpsContextProvider from '../src/AlpsContextProvider'
import Body from '../src/Body'
import { primaryColors, secondaryColors } from '../src/atoms/global/colors'

export function withAlpsTheme(Story, context = {}) {
  const {
    hasGrid = true,
    primaryColor = 'denim',
    secondaryColor = '',
  } = context.globals

  return (
    <AlpsContextProvider>
      <Body
        hasBodyClass={false}
        hasGrid={hasGrid}
        primaryColor={primaryColor}
        secondaryColor={secondaryColor}
      >
        <Story />
      </Body>
    </AlpsContextProvider>
  )
}

export const alpsGlobals = {
  hasGrid: {
    name: 'Show Grid',
    description: 'Toggle Seven-column grid',
    defaultValue: '',
    toolbar: {
      icon: 'grid',
      items: [
        { title: 'Show grid', value: true, id: 'grid-true' },
        { title: 'Hide grid', value: false, id: 'grid-false' },
      ],
    },
  },
  primaryColor: {
    name: 'Primary Color',
    description: 'Choose the primary color',
    defaultValue: 'denim',
    toolbar: {
      icon: 'paintbrush',
      items: primaryColors,
    },
  },
  secondaryColor: {
    name: 'Secondary Color',
    description: 'Choose the secondary color',
    defaultValue: '',
    toolbar: {
      icon: 'mirror',
      items: secondaryColors.map(color => ({
        title: color || 'light',
        value: color,
      })),
    },
  },
}
