import React from 'react'
import PropTypes from 'prop-types'

import Breadcrumbs from '../../molecules/navigation/Breadcrumbs'

const PageContent = ({ children, content, breadcrumbs }) => (
  <div className="text u-spacing">
    {breadcrumbs.length > 0 && <Breadcrumbs items={breadcrumbs} />}
    {children || content}
  </div>
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
