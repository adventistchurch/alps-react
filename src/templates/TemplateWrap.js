import React from 'react'
import PropTypes from 'prop-types'

import Sabbath from '../organisms/asides/Sabbath'
import Footer from '../organisms/global/Footer'
import Header from '../organisms/global/Header'

/**
 * TemplateWrap component
 *
 * Note: Don't use directly! This component is meant only to be used by templates.
 *
 * @param {Object} props
 */
function TemplateWrap({ children, footer, header, sabbath }) {
  return (
    <div className="l-wrap">
      <div className="l-wrap__content l-content" role="document">
        <Header {...header} />
        {children}
        <Footer {...footer} />
      </div>
      <Sabbath {...sabbath} />
    </div>
  )
}

TemplateWrap.propTypes = {
  children: PropTypes.node,
  footer: PropTypes.object,
  header: PropTypes.object,
  sabbath: PropTypes.object,
}
TemplateWrap.defaultProps = {}

export default TemplateWrap
