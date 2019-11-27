import React from 'react'
import { storiesOf } from '@storybook/react'
import { text } from '@storybook/addon-knobs'

import FooterModal from './FooterModal'

import data from './FooterModal.stories.json'

const propsTab = 'Props'

storiesOf('molecules/components/FooterModal', module)
  .addWithJSX('Default', () => {
    const modalText = text('Text *', data.text, propsTab)
    return <FooterModal text={modalText} />
  })

  .addWithJSX('As Children', () => {
    const modalText = text('Text *', data.text, propsTab)
    return <FooterModal>{modalText}</FooterModal>
  })
