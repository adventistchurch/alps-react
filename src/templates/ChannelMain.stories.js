import React from 'react'
import { storiesOf } from '@storybook/react'

import ChannelMain from './ChannelMain'

import { basicPageTabs } from './BasicPage.stories'

storiesOf('templates/ChannelMain', module).addWithJSX('Default', () => {
  const { content, ...rest } = basicPageTabs({ kicker: 'Kicker' })
  const { title1, title2, title3, text1, text2, text3 } = content

  const demoContent = (
    <>
      <h2>{title1}</h2>
      <p>{text1}</p>

      <h3>{title2}</h3>
      <p>{text2}</p>

      <h4>{title3}</h4>
      <p>{text3}</p>
    </>
  )

  return <ChannelMain content={demoContent} {...rest} />
})
