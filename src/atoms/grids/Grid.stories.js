import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, select } from '@storybook/addon-knobs'

import Grid, { asOptions } from './Grid'
import GridItem from './GridItem'

const tab = 'Props'

storiesOf('atoms/grids/Grid', module).addWithJSX('Default', () => {
  const as = select('As', asOptions, asOptions[0], tab)
  const noGutters = boolean('No Gutters', false, tab)
  const seven = boolean('Seven', false, tab)

  return (
    <Grid as={as} noGutters={noGutters} seven={seven}>
      <GridItem sizeAtS="3" sizeAtXL="2">
        Test
      </GridItem>
      <GridItem sizeAtS="3" sizeAtXL="2">
        Test
      </GridItem>
    </Grid>
  )
})
