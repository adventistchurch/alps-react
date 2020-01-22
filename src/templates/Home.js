import React from 'react'

import BlankTemplate from './BlankTemplate'
import TemplateWrap from './TemplateWrap'

function Home({ children, ...templateProps }) {
  return <BlankTemplate {...templateProps}>{children}</BlankTemplate>
}

Home.propTypes = TemplateWrap.propTypes

export default Home
