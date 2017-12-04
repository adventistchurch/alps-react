import React from 'react'
import PropTypes from 'prop-types'

import Logo from '../../atoms/images/Logo'
import If from '../../helpers/If'

const LogoLink = ({ title, text, path, horizontal, square, isHoriz }) => (
  <a
    href="/"
    title={title + ' logo'}
    className={
      'logo__link' +
      (text ? ' logo--with-text' : '') +
      ' logo__link--' +
      (isHoriz ? 'horiz' : 'square') +
      ' show-' +
      (isHoriz ? 'until--large' : 'at--large') +
      ' theme--primary-background-color'
    }
  >
    <Logo src={path + (isHoriz ? horizontal : square)} alt={title} />
    <If condition={text}>
      <span className="logo__text">
        <img src={path + text} className="logo__text" alt={`${title} logo`} />
      </span>
    </If>
  </a>
)

LogoLink.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  path: PropTypes.string,
  horizontal: PropTypes.string,
  square: PropTypes.string,
  isHoriz: PropTypes.bool,
}
LogoLink.defaultProps = {
  isHoriz: false,
}

export default LogoLink
