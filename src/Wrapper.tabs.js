import React from 'react'
import PropTypes from 'prop-types'

import { boolean, select } from '@storybook/addon-knobs'

import Wrapper from './Wrapper'
import { primaryColors, secondaryColors } from './atoms/global/colors'

function CustomLinkWrapper({ children, href }) {
  return <span data-link={href}>{children}</span>
}
CustomLinkWrapper.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string.isRequired,
}

function getTabData(name, settings = {}) {
  return {
    tab: name,
    ...Wrapper.defaultProps,
    ...settings,
  }
}

export function wrapperTab(settings = {}) {
  const { secondaryColor, primaryColor, hasGrid, tab } = getTabData(
    'Theme',
    settings
  )

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
