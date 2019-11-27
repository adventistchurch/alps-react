import React from 'react'
import { storiesOf } from '@storybook/react'

import ArticleFooter from './ArticleFooter'

storiesOf('organisms/sections/ArticleFooter', module).addWithJSX(
  'Default',
  () => {
    return <ArticleFooter>ArticleFooter content goes here...</ArticleFooter>
  }
)
