import React from 'react'
import PropTypes from 'prop-types'

import WrapIf from '../../helpers/WrapIf'

// Icons
import ArrowLeftIcon from './ArrowLeft'
import ArrowRightIcon from './ArrowRight'
import CheckIcon from './Check'
import DocIcon from './Doc'
import ListIcon from './List'
import LogoIcon from './Logo'
import MagnifyIcon from './Magnify'
import PdfIcon from './Pdf'
import ServiceIcon from './Service'
import ShareIcon from './Share'
import SpiritualityIcon from './Spirituality'
import VitalityIcon from './Vitality'
import WorldIcon from './World'

const icons = {
  'arrow-left': ArrowLeftIcon,
  'arrow-right': ArrowRightIcon,
  check: CheckIcon,
  doc: DocIcon,
  list: ListIcon,
  logo: LogoIcon,
  magnify: MagnifyIcon,
  pdf: PdfIcon,
  service: ServiceIcon,
  share: ShareIcon,
  spirituality: SpiritualityIcon,
  vitality: VitalityIcon,
  world: WorldIcon,
}

const iconNames = Object.keys(icons)

const Icon = ({ name, size, color, className }) => {
  const Icn = icons[name]

  return Icn ? (
    <WrapIf
      condition={size}
      Wrapper={({ children }) => (
        <span className={`icon icon--${size}`}>{children}</span>
      )}
    >
      <Icn fill={color} className={className} />
    </WrapIf>
  ) : (
    <span />
  )
}

Icon.propTypes = {
  name: PropTypes.oneOf(iconNames).isRequired,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
  color: PropTypes.oneOf([
    'fill--blue',
    'fill--light-brown',
    'fill--gray',
    'fill--white',
    'theme--primary-fill-color',
    'theme--secondary-fill-color',
  ]),
  className: PropTypes.string,
}

Icon.defaultProps = {
  name: 'list',
}

export default Icon
