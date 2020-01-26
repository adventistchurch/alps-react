import React from 'react'
import PropTypes from 'prop-types'

import IconWrap from '../../atoms/icons/IconWrap'
import { Link, UL } from '../../helpers/Element'

function ShareToolItem({ name, label, onClick, url }) {
  return (
    <li className="c-share-tools__list-item">
      <Link
        className={`c-share-tools__link ${name}`}
        href={url}
        g-plusone-count="false"
        themeColor="base"
        onClick={onClick}
      >
        {label}
      </Link>
    </li>
  )
}
ShareToolItem.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  onClick: PropTypes.func,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

// TODO: discuss about AddThis
function ShareTools({ services, url }) {
  return (
    <div className="c-share-tools js-hover">
      <Link
        href={url}
        className="c-share-tools__toggle o-kicker" // addthis_button_compact
        canBe="white"
        themeColor="base"
      >
        <IconWrap
          name="share"
          size="xs"
          spaceSize="quarter"
          spaceSide="right"
          themeColor="base"
        />
        Share
      </Link>
      <UL
        className="c-share-tools__list"
        canBe="dark-dark"
        backgroundColor="gray--light"
        themeBorder="darker"
        themeBorderSide="left"
        spacingSize="half"
        paddingSize="half"
      >
        {services.map((props, key) => (
          <ShareToolItem {...props} key={`share-${key}`} />
        ))}
      </UL>
    </div>
  )
}

ShareTools.propTypes = {
  services: PropTypes.array,
  url: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
}

ShareTools.defaultProps = {
  services: [
    { name: 'addthis_button_facebook', label: 'Facebook' },
    { name: 'addthis_button_twitter', label: 'Twitter' },
    { name: 'addthis_button_google', label: 'Google' }, // TODO: Google Plus has been shout down!
    { name: 'addthis_button_email', label: 'Email' },
  ],
  url:
    'http://www.addthis.com/bookmark.php?v=250&amp;pubid=ra-4ed4fc0e60966005',
}

export default ShareTools
