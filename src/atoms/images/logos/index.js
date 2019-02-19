import Gain from './Gain'
import SDA from './SDA'
import SDAArabic from './SDAArabic'
import SDAWithIcon from './SDAWithIcon'

const logos = {
  gain: Gain,
  sda: SDA,
  'sda-arabic': SDAArabic,
  'sda-with-icon': SDAWithIcon,
}

// Available logo names
const logoNames = Object.keys(logos)

export { logoNames }

export default logos
