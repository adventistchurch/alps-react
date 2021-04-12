import React from 'react'
import { storiesOf } from '@storybook/react'
import { boolean, number, object, text } from '@storybook/addon-knobs'

import GoogleMap from './GoogleMap'

import data from './GoogleMap.stories.json'

function googleMapTab({ tab = 'General' } = {}) {
  return {
    apiKey: text('API Key', data.apiKey, tab),
    markers: object('Markers', data.markers, tab),
    center: object('Center', data.center, tab),
    zoom: number('Zoom', data.zoom, {}, tab),
    fullscreenControl: boolean(
      'Fullscreen Control',
      data.fullscreenControl,
      tab
    ),
  }
}
storiesOf('atoms/map/GoogleMap', module).addWithJSX('Default', () => {
  const props = googleMapTab()

  return <GoogleMap {...props} style={{ height: 500 }} />
})
