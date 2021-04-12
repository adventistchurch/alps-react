import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import useScript from '../../helpers/useScript'
import useAssetsContext from '../../helpers/useAssetsContext'

export default function GoogleMap({
  apiKey,
  center,
  fullscreenControl,
  markers,
  zoom,
  customIcon,
  ...props
}) {
  const assetsPath = useAssetsContext()
  const status = useScript(
    `https://maps.googleapis.com/maps/api/js?key=${apiKey}`
  )

  useEffect(() => {
    const options = { center, zoom, fullscreenControl }
    if (status === 'ready') {
      const map = new window.google.maps.Map(
        document.getElementById('map'),
        options
      )

      for (const { position, focused } of markers) {
        new window.google.maps.Marker({
          position,
          icon:
            typeof customIcon === 'function'
              ? customIcon(focused)
              : `${assetsPath}/locator-marker${focused ? '--focus' : ''}.svg`,
          map,
        })
      }
    }
  }, [assetsPath, status, markers, center, customIcon, zoom, fullscreenControl])

  return <div id="map" {...props} />
}

GoogleMap.propTypes = {
  apiKey: PropTypes.string.isRequired,
  center: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
  className: PropTypes.string,
  customIcon: PropTypes.func,
  fullscreenControl: PropTypes.bool,
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
      }),
      focused: PropTypes.bool,
    })
  ),
  zoom: PropTypes.number,
}
GoogleMap.defaultProps = {
  className: 'c-map-default',
  zoom: 10,
}
