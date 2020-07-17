import React from 'react'

import { withContexts } from '@storybook/addon-contexts/react'
import { primaryColors, secondaryColors } from '../src/atoms/global/colors'

import AlpsContextProvider from '../src/AlpsContextProvider'
import { ThemeWrap } from '../src/Body'

export function withAlpsContext(props = {}) {
  return story => (
    <AlpsContextProvider {...props}>{story()}</AlpsContextProvider>
  )
}

export function withAlpsTheme({
  primaryColor = 'ming',
  secondaryColor = '',
  hasGrid = true,
} = {}) {
  return withContexts([
    {
      icon: 'paintbrush',
      title: 'Primary color',
      components: [ThemeWrap],
      params: primaryColors.map(color => ({
        name: color,
        props: { color },
        default: color === primaryColor,
      })),
      options: {
        deep: true,
        disable: false,
        cancelable: true,
      },
    },
    {
      icon: 'mirror',
      title: 'Secondary Color',
      components: [ThemeWrap],
      params: secondaryColors.map(color => ({
        name: color || 'light',
        props: { color },
        default: color === secondaryColor,
      })),
      options: {
        deep: true,
        disable: false,
        cancelable: true,
      },
    },

    {
      icon: 'grid',
      title: 'Show 7 Column grid',
      components: [ThemeWrap],
      params: [
        {
          name: 'Show Grid',
          props: { hasGrid: true },
          default: hasGrid,
        },
      ],
      options: {
        deep: true,
        disable: false,
        cancelable: true,
      },
    },
  ])
}
