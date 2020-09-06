import React from 'react'

import FooterModal from './FooterModal'

export default {
  title: 'ALPS/Molecules/Components/FooterModal',
  component: FooterModal,
}

const FooterModalTemplate = props => <FooterModal {...props} />

export const Default = FooterModalTemplate.bind({})
Default.args = {
  text:
    'By using our website you are consenting to our use of cookies in accordance with our Cookie Policy',
}

export const WithChildren = FooterModalTemplate.bind({})
WithChildren.args = {
  children:
    'By using our website you are consenting to our use of cookies in accordance with our Cookie Policy',
}
