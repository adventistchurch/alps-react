import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'

import Grid, { asOptions, wrapSizes } from './Grid'
import GridItem from './GridItem'

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Grid.defaultProps,
    ...settings,
  }
}

export function gridTab(settings = {}) {
  const { as, noGutters, seven, wrap, tab } = getTabData('Grid', settings)

  return {
    as: select('As', asOptions, as, tab),
    wrap: select('Wrap (x of 7)', [true, false, ...wrapSizes], wrap, tab),
    noGutters: boolean('No Gutters', noGutters, tab),
    seven: boolean('Seven', seven, tab),
  }
}

storiesOf('atoms/grids/Grid', module).addWithJSX('Default', () => {
  const { as, noGutters, seven, wrap } = gridTab()

  return (
    <Grid as={as} noGutters={noGutters} seven={seven} wrap={wrap}>
      <GridItem sizeAtS="3" sizeAtXL="2">
        Test
      </GridItem>
      <GridItem sizeAtS="3" sizeAtXL="2">
        Test
      </GridItem>
    </Grid>
  )
})
