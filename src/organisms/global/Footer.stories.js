import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import Footer from './Footer'

import data from './Footer.stories.json'
import dataPrimaryNav from '../../molecules/navigation/FooterPrimaryNavigation.stories.json'
import dataSecondaryNav from '../../molecules/navigation/FooterSecondaryNavigation.stories.json'

function textTab({ tab = 'Footer Texts' } = {}) {
  return {
    textFooter: text('Text', data.text, tab),
    copyright: text('Copyright', data.copyright, tab),
  }
}

function addressTab({ tab = 'Address' } = {}) {
  return {
    street: text('Street', data.address.street, tab),
    postcode: text('Postcode', data.address.postcode, tab),
    locality: text('Locality', data.address.locality, tab),
    region: text('Region', data.address.region, tab),
    country: text('Country', data.address.country, tab),
    phone: text('Phone number', data.address.phone, tab),
  }
}

export function footerTab({ tab = 'Footer' } = {}) {
  const { copyright, textFooter } = textTab({ tab })
  const address = addressTab({ tab })

  return {
    address,
    copyright,
    text: textFooter,
    primaryNav: dataPrimaryNav,
    secondaryNav: dataSecondaryNav,
  }
}

storiesOf('organisms/global/Footer', module)
  

  .addWithJSX('Default', () => {
    const { copyright, textFooter } = textTab()
    const address = addressTab()

    return (
      <Footer
        address={address}
        copyright={copyright}
        primaryNav={dataPrimaryNav}
        secondaryNav={dataSecondaryNav}
        text={textFooter}
      />
    )
  })
