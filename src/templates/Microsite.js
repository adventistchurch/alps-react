import React from 'react'
import PropTypes from 'prop-types'

import ArticleNavigation from '../molecules/navigation/ArticleNavigation'
import Aside from '../organisms/asides/Aside'
import AsideNavigation from '../molecules/navigation/AsideNavigation'
import PageHeader from '../organisms/sections/PageHeader'

const Microsite = ({
  title,
  kicker,
  heading,
  subhead,
  headingLogoSrc,
  navigation,
  content,
  asideNav,
  asideContent,
  reversed = false, // TODO:  what is "reversed"?
}) => {
  return (
    <main className="main can-be--dark-dark" role="main">
      <PageHeader
        {...{ title, subhead, kicker, heading, logoSrc: headingLogoSrc }}
      />
      {navigation.length > 0 ? <ArticleNavigation items={navigation} /> : null}
      <div className="layout-container full--until-large">
        <div className="flex-container cf">
          <div className="shift-left--fluid column__primary bg--white no-pad--top no-pad--btm can-be--dark-light">
            {content}
          </div>
          <div className="shift-right--fluid bg--beige can-be--dark-dark">
            {asideNav && (
              <AsideNavigation
                categoryItems={asideNav.category}
                socialItems={asideNav.social}
              />
            )}
            <div className="column__secondary can-be--dark-dark">
              <Aside>{asideContent}</Aside>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

Microsite.propTypes = {
  title: PropTypes.string.isRequired,
  kicker: PropTypes.string,
  heading: PropTypes.string,
  subhead: PropTypes.string,
  headingLogoSrc: PropTypes.string,
  navigation: PropTypes.array.isRequired,
  content: PropTypes.node.isRequired,
  breadcrumbs: PropTypes.array,
  breakout: PropTypes.node,
  asideContent: PropTypes.node,
  asideNav: PropTypes.object,
  reversed: PropTypes.bool,
}
Microsite.defaultProps = {
  header: {
    title: '',
    subhead: '',
    kicker: null,
    heading: null,
    imageSrc: null,
  },
  navigation: [],
  content: '',
  breadcrumbs: [],
}

export default Microsite
