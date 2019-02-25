import React from 'react'
import PropTypes from 'prop-types'

import InlineStyles from '../../helpers/InlineStyles'
import useResponsiveStyles from '../../helpers/useResponsiveStyles'

const getBackgroundRule = url => `.c-background-image {
  background-image: url('${url}');
}`

function PageHeader({ title, kicker, background, url }) {
  const bgInlineStyles = useResponsiveStyles(getBackgroundRule, background)

  const backgroundClass = background
    ? 'c-background-image blended u-background--cover u-gradient--bottom'
    : ''

  return (
    <header
      className={`c-page-header c-page-header__simple u-theme--background-color--dark ${backgroundClass}`}
    >
      {bgInlineStyles && <InlineStyles styles={bgInlineStyles} />}
      <div className="c-page-header__simple--inner u-padding">
        {kicker && <span className="o-kicker u-color--white">{kicker}</span>}
        <h1 className="u-font--primary--xxl u-color--white">
          <a className="u-link--white u-link-hover--white" href={url}>
            {title}
          </a>
        </h1>
      </div>
    </header>
  )
}

PageHeader.propTypes = {
  background: PropTypes.object,
  kicker: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
}

PageHeader.defaultProps = {
  className: '',
}

export default PageHeader
