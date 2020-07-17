import { boolean, select } from '@storybook/addon-knobs'

import { primaryColors, secondaryColors } from './atoms/global/colors'

export function alpsThemeTab(settings = {}) {
  const { secondaryColor, primaryColor, hasGrid, tab } = {
    ...{ tab: 'Theme', primaryColor: 'ming', hasGrid: true },
    ...settings,
  }

  return {
    hasGrid: boolean('Has Grid', hasGrid, tab),
    primaryColor: select('Primary color', primaryColors, primaryColor, tab),
    secondaryColor: select(
      'Secondary color',
      secondaryColors,
      secondaryColor,
      tab
    ),
  }
}
