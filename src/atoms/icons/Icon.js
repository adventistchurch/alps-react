import React from 'react'
import PropTypes from 'prop-types'

// Icons
import ArrowBracketLeftIcon from './ArrowBracketLeft'
import ArrowBracketRightIcon from './ArrowBracketRight'
import ArrowLongLeftIcon from './ArrowLongLeft'
import ArrowLongRightIcon from './ArrowLongRight'
import ArrowShortLeftIcon from './ArrowShortLeft'
import ArrowShortRightIcon from './ArrowShortRight'
import CloseIcon from './Close'
import ContactIcon from './Contact'
import DotsIcon from './Dots'
import FindIcon from './Find'
import HeartIcon from './Heart'
import LanguageIcon from './Language'
import LegalIcon from './Legal'
import LogoDarkIcon from './LogoDark'
import LogoRoundIcon from './LogoRound'
import LogoIcon from './Logo'
import MenuIcon from './Menu'
import PlusIcon from './Plus'
import SearchIcon from './Search'
import SettingsIcon from './Settings'
import ShareIcon from './Share'
import SubscribeIcon from './Subscribe'

const icons = {
  'arrow-bracket-left': ArrowBracketLeftIcon,
  'arrow-bracket-right': ArrowBracketRightIcon,
  'arrow-long-left': ArrowLongLeftIcon,
  'arrow-long-right': ArrowLongRightIcon,
  'arrow-short-left': ArrowShortLeftIcon,
  'arrow-short-right': ArrowShortRightIcon,
  close: CloseIcon,
  contact: ContactIcon,
  dots: DotsIcon,
  find: FindIcon,
  heart: HeartIcon,
  language: LanguageIcon,
  legal: LegalIcon,
  'logo-dark': LogoDarkIcon,
  'logo-round': LogoRoundIcon,
  logo: LogoIcon,
  menu: MenuIcon,
  plus: PlusIcon,
  search: SearchIcon,
  settings: SettingsIcon,
  share: ShareIcon,
  subscribe: SubscribeIcon,
}

const iconNames = Object.keys(icons)

const Icon = ({ name, color }) => {
  const Icn = icons[name]

  return Icn ? <Icn className={color ? `fill--${color}` : ''} /> : <span />
}

Icon.propTypes = {
  name: PropTypes.oneOf(iconNames).isRequired,
  color: PropTypes.oneOf(['white']),
}

Icon.defaultProps = {
  name: 'list',
}

export { iconNames }

export default Icon
