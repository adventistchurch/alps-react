import React from 'react'
import PropTypes from 'prop-types'

import Text from '../../atoms/texts/Text'
import Breadcrumbs from '../../molecules/navigation/Breadcrumbs'

const PageContent = ({ children, content, breadcrumbs }) => (
  <Text spacing>
    {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
    {children || content}
  </Text>
)

PageContent.propTypes = {
  breadcrumbs: Breadcrumbs.propTypes.items,
  children: PropTypes.node,
  content: PropTypes.node,
}
PageContent.defaultProps = {
  breadcrumbs: [],
}

export default PageContent
