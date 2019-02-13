import React from 'react'
import PropTypes from 'prop-types'

import Image from '../../atoms/images/Image'

const PageHeader = ({
  title,
  kicker,
  // backgroundSrcSet,
  heading,
  subhead,
  logoSrc,
  url,
  className,
}) => {
  return (
    <header
      className={`header__swath theme--primary-background-color ${
        heading ? ' header-swath--with-text' : ''
      } ${
        logoSrc ? ' header-swath--with-image blend-mode--multiply' : ''
      } ${className}`}
    >
      {/* TODO: This should be a header's sibling. Use a fragment. */}
      {/* <style type="text/css">
        .header-swath--with-image {
          background-image: url({backgroundSrcSet.default});
        }
        @media (min-width: 900px) {
          .header-swath--with-image {
            background-image: url({backgroundSrcSet.900});
          }
        }
        @media (min-width: 1100px) {
          .header-swath--with-image {
            background-image: url({backgroundSrcSet.1100});
          }
        }
      </style> */}
      <div className="layout-container cf">
        {heading && (
          <div className="header__text">
            <div className="unify show-at--small">
              <h2 className="font--secondary--l upper white">{heading}</h2>
              {subhead && (
                <h3 className="font--secondary--m white--trans">{subhead}</h3>
              )}
            </div>
            {logoSrc && (
              <div className="header__logo">
                <Image src={logoSrc} alt={heading} />
              </div>
            )}
          </div>
        )}
        <div className="flex-container cf">
          <div className="shift-left--fluid">
            {kicker && <span className="kicker white">{kicker}</span>}
            <h1 className="font--tertiary--xl white">
              <a className="link--white link-hover--white" href={url}>
                {title}
              </a>
            </h1>
          </div>
          <div className="shift-right--fluid" />
        </div>
      </div>
    </header>
  )
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  kicker: PropTypes.string,
  backgroundSrcSet: PropTypes.string,
  heading: PropTypes.string,
  subhead: PropTypes.string,
  logoSrc: PropTypes.string,
  className: PropTypes.string,
}

PageHeader.defaultProps = {
  className: '',
}

export default PageHeader
