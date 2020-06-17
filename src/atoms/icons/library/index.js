import { lazy } from 'react'

const ArrowBracketLeft = lazy(() => import('./ArrowBracketLeft'))
const ArrowBracketRight = lazy(() => import('./ArrowBracketRight'))
const ArrowLongLeft = lazy(() => import('./ArrowLongLeft'))
const ArrowLongRight = lazy(() => import('./ArrowLongRight'))
const ArrowShortLeft = lazy(() => import('./ArrowShortLeft'))
const ArrowShortRight = lazy(() => import('./ArrowShortRight'))
const Close = lazy(() => import('./Close'))
const Contact = lazy(() => import('./Contact'))
const Dots = lazy(() => import('./Dots'))
const Find = lazy(() => import('./Find'))
const Heart = lazy(() => import('./Heart'))
const Language = lazy(() => import('./Language'))
const Legal = lazy(() => import('./Legal'))
const Logo = lazy(() => import('./Logo'))
const LogoDark = lazy(() => import('./LogoDark'))
const LogoRound = lazy(() => import('./LogoRound'))
const Menu = lazy(() => import('./Menu'))
const Plus = lazy(() => import('./Plus'))
const Search = lazy(() => import('./Search'))
const Settings = lazy(() => import('./Settings'))
const Share = lazy(() => import('./Share'))
const Subscribe = lazy(() => import('./Subscribe'))

// Returns a mapping of icons names and they correspondant components

export default {
  'arrow-bracket-left': ArrowBracketLeft,
  'arrow-bracket-right': ArrowBracketRight,
  'arrow-long-left': ArrowLongLeft,
  'arrow-long-right': ArrowLongRight,
  'arrow-short-left': ArrowShortLeft,
  'arrow-short-right': ArrowShortRight,
  close: Close,
  contact: Contact,
  dots: Dots,
  find: Find,
  heart: Heart,
  language: Language,
  legal: Legal,
  logo: Logo,
  'logo-dark': LogoDark,
  'logo-round': LogoRound,
  menu: Menu,
  plus: Plus,
  search: Search,
  settings: Settings,
  share: Share,
  subscribe: Subscribe,
}
