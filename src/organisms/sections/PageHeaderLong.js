import React from 'react'
import PropTypes from 'prop-types'

import InlineStyles from '../../helpers/InlineStyles'
import useResponsiveStyles from '../../helpers/useResponsiveStyles'
import { Div, Header, HeadingOne, Link, Span } from '../../helpers/Element'

const getBackgroundRule = url => `.o-background-image {
  background-image: url('${url}');
}`

function PageHeaderLong({ title, kicker, subtitle, background, url }) {
  const bgInlineStyles = useResponsiveStyles(getBackgroundRule, background)

  const backgroundClass = background
    ? 'o-background-image u-background--cover has-background'
    : ''

  return (
    <div>
      <Header
        className={`c-page-header c-page-header__long ${backgroundClass}`}
        themeBackground="dark"
        spaceSize="zero"
      >
        {bgInlineStyles && <InlineStyles styles={bgInlineStyles} />}
        <Div
          className={`c-page-header__long--inner ${
            background ? 'u-gradient--bottom' : ''
          }`}
        >
          <Div
            className="c-page-header__content c-page-header__long__content"
            borderSide={background ? 'left' : null}
            borderColor={background ? 'white' : null}
            borderAt={background ? 'medium' : null}
            shiftSide="left"
            shiftAt="xxlarge"
            noGridClass
            gridWrap={5}
          >
            {kicker && (
              <Span className="c-page-header__kicker o-kicker" color="white">
                {kicker}
              </Span>
            )}
            <HeadingOne color="white" fontType="primary" fontSize="xl">
              {url ? (
                <Link
                  href={url}
                  linkColor="white"
                  linkHoverColor="white"
                  className="c-page-header__title-link"
                  fontWeight="bold"
                >
                  {title}
                </Link>
              ) : (
                title
              )}
            </HeadingOne>
          </Div>
        </Div>
      </Header>
      {subtitle && (
        <Div
          className="c-page-header__subtitle c-page-header__long__subtitle"
          seven
        >
          <Div
            fontType="secondary"
            fontSize="m"
            borderSide={background ? 'left' : null}
            shiftSide="left"
            shiftAt="xxlarge"
            gridWrap={5}
          >
            {subtitle}
          </Div>
        </Div>
      )}
    </div>
  )
}

PageHeaderLong.propTypes = {
  background: PropTypes.object,
  kicker: PropTypes.string,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

export default PageHeaderLong
