import React from 'react'
import PropTypes from 'prop-types'

import Aside from '../organisms/asides/Aside'
import PageHeader from '../organisms/sections/PageHeader'
import PageContent from '../organisms/content/PageContent'

const BasicPage = ({
  title,
  kicker,
  heading,
  subheading,
  headerLogoSrc,
  content,
  breadcrumbs,
  breakout,
  aside,
  reversed,
}) => {
  return (
    <main className="main can-be--dark-dark" role="main">
      <PageHeader
        {...{ title, subheading, kicker, heading, logoSrc: headerLogoSrc }}
      />
      <div className="layout-container full--until-large">
        <div
          className={'flex-container cf' + (reversed ? ' shift--reversed' : '')}
        >
          <div className="shift-left--fluid column__primary bg--white can-be--dark-light">
            <PageContent content={content} breadcrumbs={breadcrumbs} />
          </div>
          <div className="shift-right--fluid bg--beige can-be--dark-dark">
            {breakout}
            <div className="column__secondary can-be--dark-dark">
              {aside && <Aside>{aside}</Aside>}
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

BasicPage.propTypes = {
  title: PropTypes.string.isRequired,
  kicker: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  headerLogoSrc: PropTypes.string,
  content: PropTypes.node.isRequired,
  breadcrumbs: PropTypes.array,
  breakout: PropTypes.node,
  aside: PropTypes.node,
  reversed: PropTypes.bool,
}
BasicPage.defaultProps = {
  headerTitle: '',
  content: '',
  breadcrumbs: [],
  reversed: false,
}

export default BasicPage
