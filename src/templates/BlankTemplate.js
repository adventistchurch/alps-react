import React from 'react'

import Main from './Main'
import TemplateWrap from './TemplateWrap'

function BlankTemmplate({ children, ...props }) {
  return (
    <TemplateWrap {...props}>
      <Main>{children}</Main>
    </TemplateWrap>
  )
}

BlankTemmplate.propTypes = TemplateWrap.propTypes

export default BlankTemmplate
