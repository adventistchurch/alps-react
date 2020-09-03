import Icon, { iconNames } from './Icon'

export default {
  title: 'ALPS/Atoms/Icons/Icon',
  component: Icon,
  args: {
    name: '',
  },
}

export const Default = Icon.bind({})
Default.args = { name: 'logo' }
Default.argTypes = { name: { control: { type: 'select', options: iconNames } } }

export const ArrowBracketLeft = Icon.bind({})
ArrowBracketLeft.args = { name: 'arrow-bracket-left' }

export const ArrowBracketRight = Icon.bind({})
ArrowBracketRight.args = { name: 'arrow-bracket-right' }

export const ArrowLongLeft = Icon.bind({})
ArrowLongLeft.args = { name: 'arrow-long-left' }

export const ArrowLongRight = Icon.bind({})
ArrowLongRight.args = { name: 'arrow-short-right' }

export const ArrowShortLeft = Icon.bind({})
ArrowShortLeft.args = { name: 'arrow-short-left' }

export const ArrowShortRight = Icon.bind({})
ArrowShortRight.args = { name: 'arrow-short-right' }

export const Close = Icon.bind({})
Close.args = { name: 'close' }

export const Contact = Icon.bind({})
Contact.args = { name: 'contact' }

export const Dots = Icon.bind({})
Dots.args = { name: 'dots' }

export const Find = Icon.bind({})
Find.args = { name: 'find' }

export const Heart = Icon.bind({})
Heart.args = { name: 'heart' }

export const Language = Icon.bind({})
Language.args = { name: 'language' }

export const Logo = Icon.bind({})
Logo.args = { name: 'logo' }

export const LogoDark = Icon.bind({})
LogoDark.args = { name: 'logo-dark' }

export const LogoRound = Icon.bind({})
LogoRound.args = { name: 'logo-round' }

export const Menu = Icon.bind({})
Menu.args = { name: 'menu' }

export const Plus = Icon.bind({})
Plus.args = { name: 'plus' }

export const Search = Icon.bind({})
Search.args = { name: 'search' }

export const Settings = Icon.bind({})
Settings.args = { name: 'settings' }

export const Share = Icon.bind({})
Share.args = { name: 'share' }

export const Subscribe = Icon.bind({})
Subscribe.args = { name: 'subscribe' }
