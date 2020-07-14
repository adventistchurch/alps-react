import React from 'react'

import Wrapper from '../src/Wrapper'
import { wrapperTab } from '../src/Wrapper.tabs.js'

export default function withAlpsWrapper(settings) {
  return story => {
    const content = story()
    const wrapperProps = wrapperTab(settings)

    return <Wrapper {...wrapperProps}>{content}</Wrapper>
  }
}
