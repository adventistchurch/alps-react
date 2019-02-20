import React from 'react'
import PropTypes from 'prop-types'

import Sabbath from '../organisms/asides/Sabbath'
import Footer from '../organisms/global/Footer'
import Header from '../organisms/global/Header'

/**
 * TemplateWrap component
 *
 * Note: Dont use directly! This component is meant only to be used by templates.
 *
 * @param {Object} props
 */
function TemplateWrap({ children, footerProps, headerProps, sabbathProps }) {
  return (
    <div className="l-wrap">
      <div className="l-wrap__content l-content" role="document">
        <Header {...headerProps} />
        {children}
        <Footer {...footerProps} />
      </div>
      <Sabbath {...sabbathProps} />
    </div>
  )
}

TemplateWrap.propTypes = {
  children: PropTypes.node,
  footerProps: PropTypes.object,
  headerProps: PropTypes.object,
  sabbathProps: PropTypes.object,
}
TemplateWrap.defaultProps = {}

export default TemplateWrap
