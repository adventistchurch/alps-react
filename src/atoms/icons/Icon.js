import React from 'react'
import PropTypes from 'prop-types'

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

const Icon = ({ name, size, fill }) => {
  const Icn = icons[name]

  return size ? (
    <span className={`icon icon--${size}`}>
      <Icn fill={fill} />
    </span>
  ) : (
    <Icn fill={fill} />
  )
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(['xs', 's', 'm', 'l', 'xl']),
  fill: PropTypes.string, //PropTypes.oneOf(['color']),
}

Icon.defaultProps = {
  name: 'list',
}

export default Icon
