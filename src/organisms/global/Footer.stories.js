import React from 'react'
import { storiesOf } from '@storybook/react'
import { text, withKnobs } from '@storybook/addon-knobs'

import Footer from './Footer'

import data from './Footer.stories.json'
import dataPrimaryNav from '../../molecules/navigation/FooterPrimaryNavigation.stories.json'
import dataSecondaryNav from '../../molecules/navigation/FooterSecondaryNavigation.stories.json'

const textsTab = 'Texts'
const addressTab = 'Address'

storiesOf('organisms/global/Footer', module)
  .addDecorator(withKnobs)

  .addWithJSX('Default', () => {
    // Texts
    const textFooter = text('Text', data.text, textsTab)
    const copyright = text('Copyright', data.copyright, textsTab)

    // Address:
    const street = text('Street', data.address.street, addressTab)
    const postcode = text('Postcode', data.address.postcode, addressTab)
    const locality = text('Locality', data.address.locality, addressTab)
    const region = text('Region', data.address.region, addressTab)
    const country = text('Country', data.address.country, addressTab)
    const phone = text('Phone number', data.address.phone, addressTab)

    const address = {
      street,
      postcode,
      locality,
      region,
      country,
      phone,
    }

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
