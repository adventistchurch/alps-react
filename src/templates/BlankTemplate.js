import React from 'react'

import Main from './Main'
import TemplateWrap from './TemplateWrap'

function BlankTemplate({ children, ...props }) {
  return (
    <TemplateWrap {...props}>
      <Main>{children}</Main>
    </TemplateWrap>
  )
}

BlankTemplate.propTypes = TemplateWrap.propTypes

export default BlankTemplate
