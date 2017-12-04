import React from 'react'
import PropTypes from 'prop-types'

import Breadcrumbs from '../../molecules/navigation/Breadcrumbs'

const PageContent = ({ content, breadcrumbs }) => (
  <div className="pad--primary spacing">
    <Breadcrumbs items={breadcrumbs} />
    <div className="text article__body spacing">{content}</div>
  </div>
)

PageContent.propTypes = {
  content: PropTypes.node,
  breadcrumbs: PropTypes.array,
}

export default PageContent
