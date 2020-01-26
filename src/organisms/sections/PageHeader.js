import React from 'react'
import PropTypes from 'prop-types'

import InlineStyles from '../../helpers/InlineStyles'
import useResponsiveStyles from '../../helpers/useResponsiveStyles'
import { Div, Header, HeadingOne, Link, Span } from '../../helpers/Element'

const getBackgroundRule = url => `.o-background-image {
  background-image: url('${url}');
}`

function PageHeader({ title, kicker, background, url }) {
  const bgInlineStyles = useResponsiveStyles(getBackgroundRule, background)

  const backgroundClass = background
    ? 'o-background-image u-background--cover u-gradient--bottom'
    : ''

  return (
    <Header
      className={`c-page-header c-page-header__simple ${backgroundClass}`}
      themeBackground="dark"
    >
      {bgInlineStyles && <InlineStyles styles={bgInlineStyles} />}
      <Div className="c-page-header__simple--inner" padding>
        {kicker && (
          <Span className="o-kicker" color="white">
            {kicker}
          </Span>
        )}
        <HeadingOne color="white" fontType="primary" fontSize="xxl">
          <Link href={url} linkColor="white" linkHoverColor="white">
            {title}
          </Link>
        </HeadingOne>
      </Div>
    </Header>
  )
}

PageHeader.propTypes = {
  background: PropTypes.object,
  kicker: PropTypes.string,
  title: PropTypes.string.isRequired,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default PageHeader
