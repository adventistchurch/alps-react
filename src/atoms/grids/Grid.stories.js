import React from 'react'

import Grid, { asOptions, wrapSizes } from './Grid'
import GridItem from './GridItem'

const GridTemplate = (props) => {
  return (
    <Grid {...props}>
      <GridItem sizeAtS="3" sizeAtXL="2">
        Test
      </GridItem>
      <GridItem sizeAtS="3" sizeAtXL="2">
        Test
      </GridItem>
    </Grid>
  )
}

export default {
  title: 'Atoms/Grids/Grid',
  component: Grid,
  args: {
    as: 'div', 
    wrap: '1', 
    seven: false, 
    noGutters: false,
  },
  argTypes: {
    as: { control: { type: 'select', options: asOptions } },
    wrap: { control: { type: 'select', options: wrapSizes } },
  }
}


export const Default = GridTemplate.bind({});